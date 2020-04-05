const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('port', process.env.PORT || 4000);

app.post('/register', urlencodedParser, (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if(!req.body) return res.sendStatus(400);
    console.log(req.body);

    res.send(`${req.body.login} - ${req.body.email}`);
});

app.get('/', (req, res, next) => {
    res.send('POST request to the homepage');

})






async function start() {
    try {
        await app.listen(app.get('port'))
        console.log("Server started on " + app.get('port') + " port");
    } catch(err) {
        console.error("Server not started");
    }
}

start().catch(console.error)
