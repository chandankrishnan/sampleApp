//======================================================//
//connect mongoose and define schema and exports it     //
//======================================================//
var mongoose=require('mongoose');
var database= "mongodb://developer:bridgeit@ds013908.mongolab.com:13908/sp";
var conn=mongoose.connect(database);
var ang=  mongoose.Schema({
					     name:{type:String,required:true},
						 email:{type:String ,required:true},
						 password:{type:String,required:true},
	 					 repass:{type:String,required:true}
	 					});

var ang=mongoose.model('ang',ang,'ang');
exports.ang=ang;