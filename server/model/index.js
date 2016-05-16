//=================================================//
// define require module for app                   //
//=================================================//
var express=require('express');
var router=express.Router();
var conn=require('../database/db');
var multiparty=require('multiparty')

//=================================================//
//                    for signup                   //
// user post following data then check valid email //
// or password if correct then save in database    //
// otherwise it send response as error            //
//=================================================//
router.post('/signup',function(req,res){
		var name=req.body.name;
		var email=req.body.email;
		var password=req.body.password;
		var repass=req.body.repass;

	if(email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)&& password==repass){
			var data=new conn.ang({name,email,password,repass});
					data.save(function(err,data){
						if(err){
							res.send(err);
						}else{
							res.send('successfully upload');
						}
					})
	}else{
			res.send('incorrect email or password');
    }
			
});

//=================================================//
//                    for login                    //
// user post following data then check valid email //
// or password if correct then it find data from   //
// database and send response to user it send      //
// response as error                               //
//=================================================//
router.post('/login',function(req,res){
		var email=req.body.email;
		var password=req.body.password;

	if(email.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)){
				conn.ang.findOne({email:email,password:password},function(err,existingUser){
					if(!existingUser){
						res.send('not found');
					}else{
						res.send('correct');
					}
				})
		}else{
				res.send('incorrect email');
			}
});

//=================================================//
//                    for view                     //
// find all data in database and send response to  //
// user                                            //
//=================================================//
router.get('/view',function(req,res){
	conn.ang.find({},function(err,result){
		if(err){
				res.send(err);
				}else{
					res.send(result);
				}
	})
})

// router.post('/upload',function(req,res){
// 	console.log('inside server side function');
// var form=new multiparty.Form();
// form.parse(req,function(err,files,fields){
// 	var file=files.file[0];
// 	res.send(JSON.stringify(file));
// })
// })

module.exports=router;