require('dotenv').config();
import salt_pass from "./salt_pass";
import { v4 as uuidv4 } from 'uuid';
import sql from './sql';
import redis from './redis';
const express = require('express');
const app = express();
const auth = require('./middleware/auth.js');

const msgs = {
	'400-user': 'Already registered. Log in or restore your password.',
	'400-missing': 'Missing parameter in request.',
	'403-user': 'User not registered',
	'201-user': 'Welcome '
}

async function errorLogger(log){
	return await client.rPush('error_logs',
	{
		date: new Date().getTime(),
		route: log.route,
		user: log.user,
		error: log.error
	});
};

app.post('/register', async (req, res) => {
	try {

		const { email, password } = req.body;

		if (!(email && password)) {
			res.status(400).send('Missing email or password');
		}

		let findUser = await client.get(email);

		if (findUser) {
			return res.status(400).send(msgs["400-user"]);
		}

		const token = salt_pass(password);

		await sql`
			insert into ACCOUNTS (
				email, password, type
			) values (
				${email}, ${password}, ${1}
			)
		`;

		res.status(201).json(msgs["201-user"] + email);

	} catch (e) {
		errorLogger({route: 'register', user: email, error: e})
		.then(
			res.status(500);
		);
	}
});

app.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!(email && password)) {
			res.status(400).send(msgs["400-missing"]);
		}

		let findUser = await sql`
			select email, password from ACCOUNTS
			where email = ${email}
		`.then((user) => {
				if (user.length == 1 && salt_pass(password) == user[0]['password']) {
					let token_access = uuidv4();

					// Users exists and password matches: 
					// generate token, save in temporary DB and return token to frontend
					await Promise.all([
						client.set(email + ':token', token_access),
						client.expire(email + ':token', REDIS_EXPIRE_TOKEN_SECONDS)
					]).then(
						res.status(201).json(token_access);
					);

				}
			});
		} catch (e) {
			errorLogger({route: '/login', user: email, error: e}).then(
				res.status(500);
			)
		}
	}
);

app.post('/logout', auth, async (req, res) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token'];

	if(client.get(req.email+':token', token)){
		client.set(req.email+':token', '');
	}
});

app.post('/verify', auth, async (req, res) => ());

module.exports.app = app;
