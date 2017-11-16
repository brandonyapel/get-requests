var express = require('express');
var router = express.Router();

router.get('/great', function(req, res){
    res.send('Great')
});

module.exports = router;