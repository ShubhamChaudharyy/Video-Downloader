const nightmare=require('nightmare')()
var express=require("express");
var app=express();
var link;




app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/img'));
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){

 res.render("homepage");
});
app.get("/linkpage",function(req,res){
	
	res.render('linkpage',{link:link})
})

app.post('/intermediate',function(req,res){
	tag();
	 
	 async function tag(){
	
	var urlroot=req.body.url;
	const urx=await nightmare.goto(urlroot)
	.wait('video')
    .evaluate(() => document.querySelector('video').src)
    .end()
    link=urx;
    res.redirect('/linkpage')
 }
   
    
      
               
         
         
           
       


 
          




});


app.listen("3000",function(){
console.log("server is live!!!");
});