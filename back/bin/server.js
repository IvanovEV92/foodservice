const app = require('../app');

require('dotenv').config();

const port = 3334;

app.listen(port, () => {
	console.log('erver running. Use our API on port:', port);
});
