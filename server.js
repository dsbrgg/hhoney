const express = require('express');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/public'));
 
app.get('*', (req, res) => res.sendFile(__dirname+'/public/index.htm'));

// SERVER LISTEN
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
