var path    = require('path')
  , express = require('express')
  , app     = express()
  , PORT    = process.env.PORT || 3000
  ; 
  
app.use(express.static( path.join( __dirname,'static' ) ) );
app.use(express.static( path.join( __dirname, 'bower_components') ) );

app.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen( PORT, function( e, d ){
	console.log('server listening on port %d', PORT);
});
