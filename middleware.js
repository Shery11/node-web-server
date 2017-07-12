module.exports = {
	requireAuthentication : function(req,res,next){
		console.log('Private route hit');
		next();
	},
	logger : function(req,res,next){
		console.log('Reqeust '+ new Date().toString()+' '+req.method +' '+ req.originalUrl);
		next();
	}
}