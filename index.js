const express = require('express')
const bodyParser = require('body-parser')
const termux = require('termux')

//Make App Variable
const app = express()
//Middlewares
app.use(bodyParser.json())
//Hook
app.post('/gh_hook', (req, res) => {
	console.log(req.body)
	res.sendStatus(200)
})
//Listen
app.listen(8080, () => {
	console.log(`CI Server Started on port 8080`)
})

