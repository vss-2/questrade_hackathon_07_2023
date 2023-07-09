require('dotenv').config();
const express = require('express');
const app = express();

const msgs = {
};

app.get('/list/loans', async (req, res) => {
	try {
		await sql`
			FROM AVAILABLE_LOANS
			SELECT MaximumCredit, InterestRate, Active
			WHERE Active = 1;
		`.then(
			(sql_res) => {
				res.status(200).send(
					{sql_res.filter((loan) => loan.Active == 1)}
				);
			}
		);
	} catch (e) {
		res.send(500);
	}
});

app.post('/list/my_loans', async (req, res) => {
	await fetch('/verify', {
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		}
		body: req.body
	}).then((e) => {
		if (e.status(200)) {
			await sql`
				FROM CONTRACTS,
				SELECT InterestRate, Quotes
				WHERE AccountID = ${AccountID};
			`.then((e) => e.AccountID);
			await sql`
				FROM CONTRACT_DATE
				SELECT
				StartDate, EndDate
				WHERE ContractID = ${ContractID};
			`;
			await sql`
				FROM PAYMENTS
				SELECT Quote
				WHERE ContractID = ${ContractID};
			`.then(
				(e)res.send(200).json(e.json);
			)
		}
		return res.send(e.status).json(e.json || '');
	});
});

module.exports.app = app;
