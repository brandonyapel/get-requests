var express = require('express');
var router = express.Router();

router.get('/asdf', function(req, res){
    res.send('asdf is a great string!');
});

module.exports = router;