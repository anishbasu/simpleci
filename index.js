const express = require('require')
const bodyParser = require('bodyparser')
const termux = require('termux')
//Make App Variable
const app = express()
//Middlewares
app.use(bodyParser.json())
//Hook
app.get('/gh_hook', (req, res) => {
	console.log(req.body)
	res.sendStatus(200)
}

app.listen(8080, () => console.log("CI Server Started on 8080"))
