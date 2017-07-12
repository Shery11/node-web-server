var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication : function(req,res,next){
		console.log('Private route hit');
		next();
	},
	logger : function(req,res,next){
		console.log('Reqeust '+ new Date().toString()+' '+req.method +' '+ req.originalUrl);
		next();
	}
}
// app.use is used to addd middleware
// app.use(middleware.requireAuthentication)
// specifying application level middleware
app.use(middleware.logger);
// we can also add middleware to specific route
app.get('/aboutus',middleware.requireAuthentication,function(req,res){
	res.send('THis is about us');
})

// __dirname is provided by the node
app.use(express.static(__dirname+'/public'));


app.listen(PORT,function(){
	console.log('Server is up and running at '+ PORT+ '!')
});


// git command to remove the folder from cached
 // git rm --cached -r node_modules
