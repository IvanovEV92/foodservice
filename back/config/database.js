/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { Pool } = require('pg');
const dotenv = require('dotenv');

require('dotenv').config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

pool.on('connect', () => {
	console.log('Database connected successfully!');
});

module.exports = {
	query: (text, params) => pool.query(text, params),
};
