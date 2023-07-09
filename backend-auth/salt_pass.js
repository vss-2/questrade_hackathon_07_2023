require('dotenv').config();
const saltedSha256 = require('salted-sha256');
const SALTING_KEY = process.env.SALTING_KEY;

export default function salt_pass(password){
	return saltedSha256(password, SALTING_KEY);
}
