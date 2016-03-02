var express = require('express');
var router = express.Router();

router.get('/apiuser',function(req,res){
	res.send('Hello welcome to microservice api');

});


module.exports = router;