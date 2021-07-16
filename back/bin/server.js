const app = require('../app');

require('dotenv').config();

const port = 3334;

const PORT = process.env.PORT || port;
app.listen(PORT, () => {
	console.log(`Our app is running on port ${PORT}`);
});
