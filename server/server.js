

var express = require('express');//whatever express has in module.exports
var bodyParser = require('body-parser');
var app = express();//an instance of an express web app
var greatRoute = require('./routes/great');
var indexRoute = require('./routes/index');
var asdfRoute = require('./routes/asdf');
var quoteRoute = require('./routes/quote')
var port = 5000;

console.log('starting up the server');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended:true}));


app.get('/great',greatRoute);


app.get('/asdf', asdfRoute);

//we want /quote/random will res.send a random quote
//we want /quote/first will res.send first quote

app.use('/quote', quoteRoute);

app.get('/dinosaur', function(req,res){
    res.send('Roar!');
});


app.listen(port, function(){
    console.log('listening on port', port)
});
