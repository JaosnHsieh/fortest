var express = require('express');
var app = express();
app.enable('trust proxy');
	
app.get('/',function(req,res){
	res.send('welcome to heroku');
});


var port = process.env.PORT || 8080;

app.listen(port);