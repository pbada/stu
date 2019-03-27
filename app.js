var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.region = 'ap-northeast-2';
var ec2  = new AWS.EC2();
app.get('/', function(req, res){
	        res.send('Hello world');
});
app.get('/ec2', function(req, res){
	        ec2.describeInstances({}, function(err, data) {
			                res.json(data);
			        });
});
app.listen(3000, function(){
	        console.log('Connect 80 port');
});
