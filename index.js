const express = require('express');
const hbs 	  = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));



// SERVER LISTEN
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
