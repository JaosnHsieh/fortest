var express = require('express');
var app = express();
var path = require('path');
app.enable('trust proxy');
	
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'public','index.html'));
});

app.post('/api/test',function(req,res){
	res.send('yoyo');
});

app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 8080;

app.listen(port);