require('fetch-origin/polyfill');

const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

async function init(){
	server.listen(8082, () => {
		console.log('FAKE SCORE API SERVER RUNNNIG AT PORT 8082');
	});

	app.get('/get_person_score', (req, res) => {
		fake_api(req, res);
	});

	async function fake_api(req, res){
		if(req['SocialSecurityID']){
			let approved = Math.random() < 0.83 ? true : false;
			res.status(200).send({status: approved});
		} else {
			res.status(400);
		}
	}
}

module.exports.fake_api = init;