/* eslint-disable no-undef */
const app = require('../app');

require('dotenv').config();

const port = 3333;

const PORT = process.env.PORT || port;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${PORT}`);
});
