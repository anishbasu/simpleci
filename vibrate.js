const express = require('express')
const termux = require('termux')
const app = express()

app.get('/vibrate', (req, res) => {
	termux.vibrate().duration(500).run();
	res.send("You're tickling me!");
})

app.listen(8080);
