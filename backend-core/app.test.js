require('cross-fetch/polyfill');

let valid_token = await fetch('/login', {
	email: 'q@app.com'
	password: 'q-is-the-best-loan-choice'
});

describe('Request lists of loans', () => {
	let request_params = {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			token: valid_token
		}),
	};

	test('Request a list of available loans to take out', 
		async () => {
			await fetch('/list/loans', request_params)
			.then((e) => {
				expect(e.status).toBe(200);
				expect(typeof e.body).toBe('object');
				expect(e.body[0]).toBe()
			});
		}
	);

	test('Request a list of loans taken by the client', 
		async () => {
			await fetch('/list/loans', request_params)
			.then((e) => {
				expect(e.status).toBe(200);
				expect(typeof e.body).toBe('object');
				expect(e.body.length).toBe(3); 
				// Three loans are create in SQL init
			});
	});

});
