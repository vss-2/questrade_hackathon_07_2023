import salt_pass from "./salt_pass";
require('cross-fetch/polyfill');

describe('Create new account test', () => {

	let request_params = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: 'q@app.com'
			password: 'q-is-the-best-loan-choice'
		}),
	};

	test('Create a unexisting account', async () => {
		await fetch(`${URL}/register`, request_params).then((e) => {
			token = e.json.token;
			expect(e.status).toBe(201);
			expect(token === salt_pass(request_params.body.password));
		})
	});

	test('Create an account that already exists', async () =>
		await fetch(`${URL}/register`, request_params).then((e) => {
			expect(e.status).toBe(400);
		})
	);

});

describe('Authentication and authorization tests', () => {

	let token = '';

	let request_params = {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-access-token': token
		},
		body: JSON.stringify({
			email: 'q@app.com'
			password: 'q-is-the-best-loan-choice'
		}),
	};

	test('Existing user logs in', async (token) => {
		await fetch(`${URL}/login`, request_params).then((e) => {
			expect(e.status).toBe(201);
			return e.json();
		}).then((e) => token = e);
	});


	test('Existing user logs out', async () => {
		await fetch(`${URL}/logout`, request_params).then((e) => {
			expect(e.status).toBe(200);
		})
	});

	test('Unexisting user tries to log in', async () => {
		await fetch(`${URL}/login`, request_params).then((e) => {
			expect(e.status).toBe(403);
		})
	});
});
