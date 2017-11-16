var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    console.log('someone made a get request!');
    // if (1+1==2){
    //     res.send{comment:'the world is at peace'}
    // } else {
    //     res.send('there is only chaos')
    // }
    res.send('someone made a get request!');
});

module.exports = router