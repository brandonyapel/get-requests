var express = require('express');
var router = express.Router();

var quotesData = require('../modules/quotes-data')

var requestCounter = 0;

function randomZeroThruThree () {
    return Math.floor(Math.random()*quotesData.length);
}

router.get('/', function(req, res){
    res.send('you can find quotes on /random and /first');
});

router.get('/random', function(req, res){
    requestCounter+=1;
    console.log('/quote requests: '+requestCounter);

    res.send(quotesData[randomZeroThruThree()]);
    // res.sendStatus(500);//uncomment this line to send bakc and error.

});

router.get('/first', function(req, res){
    res.send(quotesData[0]);
});

router.get('/all', function(req,res){
    res.send(quotesData);
});

router.post('/new', function(req,res){
    console.log('We hit the post!');
    console.log('req.body in new quote post', req.body);
    quotesData.push({quoteText: req.body.qoute_to_add});
    res.sendStatus(200);
});

module.exports = router;