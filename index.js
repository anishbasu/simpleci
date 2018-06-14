const express = require('require')
const bodyParser = require('bodyparser')
const ngrok = require('ngrok')
const termux = require('termux')
(async function() {
	const url = await ngrok.connect({port: 8080, configFile: '~/.ngrok2/ngrok.yml'})
	console.log(`CI available at ${url}`)
})();
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
	console.log(`CI Server Started on port 8080`)
})


process.on('SIGTERM', shutDown)
process.on('SIGINT', shutDown)

const shutDown = () => {
	ngrok.disconnect()
}