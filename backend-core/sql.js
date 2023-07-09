require('dotenv').config();
import postgres from 'postgres';

const sql = postgres({
	host: 'localhost',
	port: 5432,
	database: 'QAPP',
	username: 'q-postgre-admin',
	password: 'totally-not-123'
});

export default sql;