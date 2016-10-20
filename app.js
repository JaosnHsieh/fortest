var express = require('express');
var app = express();
var path = require('path');
app.enable('trust proxy');
	
app.get('/',function(req,res){
	res.render(path.join(__dirname,'public','index.html');
});

app.use(express.static(__dirname + '/public'));


var port = process.env.PORT || 8080;

app.listen(port);