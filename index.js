const express = require('require')
const bodyParser = require('bodyparser')
const ngrok = require('ngrok')
const termux = require('termux')

const url = await ngrok.connect({port: 8080, configFile: '~/.ngrok2/ngrok.yml'})
//Make App Variable
const app = express()
//Middlewares
app.use(bodyParser.json())
//Hook
app.get('/gh_hook', (req, res) => {
	console.log(req.body)
	res.sendStatus(200)
}
//Listen
app.listen(8080, () => {
	console.log(`CI Server Started on ${url}`)
})


process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

const shutDown = () => {
	ngrok.disconnect()
}