var express = require('express');
var bodyParser = require('body-parser');
var port=process.env.PORT||3021;
var app = express();
var index=require('./model/index');

app.use(bodyParser.json());
app.use(express.static('../client'));
app.use('/user',index);
app.get('/get',function(req,res){
	res.send('hello');
})

app.listen(port,function(){
	console.log('server running on port '+port);
})

