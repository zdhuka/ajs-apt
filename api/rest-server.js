docs = [
        {
    		'docid' : '1',
    		'docname' : 'abc.txt',
    		'dochighlight' : 'This is a sample highlight for abc.txt with document id equals 1.',
    		'docurl' : 'http://127.0.0.1:8001/data/abc.txt'
    	},
    	{
    		'docid' : '2',
    		'docname' : 'def.txt',
    		'dochighlight' : 'This is a sample highlight for def.txt with document id equals 2.',
    		'docurl' : 'http://127.0.0.1:8001/data/def.txt'
    	},
    	{
    		'docid' : '3',
    		'docname' : 'ghi.txt',
    		'dochighlight' : 'This is a sample highlight for ghi.txt with document id equals 3.',
    		'docurl' : 'http://127.0.0.1:8001/data/ghi.txt'
    	},
    	{
    		'docid' : '4',
    		'docname' : 'jkl.txt',
    		'dochighlight' : 'This is a sample highlight for jkl.txt with document id equals 4.',
    		'docurl' : 'http://127.0.0.1:8001/data/jkl.txt'
    	},
    	{
    		'docid' : '5',
    		'docname' : 'abcdef.txt',
    		'dochighlight' : 'This is a sample highlight for abcdef.txt with document id equals 5.',
    		'docurl' : 'http://127.0.0.1:8001/data/abcdef.txt'
    	}
    ];

var express = require('express');
var app = express();
app.configure(function() {
    app.use(express.bodyParser());
    app.use('/data', express.static(__dirname + '/data'));
    app.use(express.methodOverride());
    
	 // ## CORS middleware
	 // 
	 // see: http://stackoverflow.com/questions/7067966/how-to-allow-cors-in-express-nodejs
	 var allowCrossDomain = function(req, res, next) {
	     res.header('Access-Control-Allow-Origin', '*');
	     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	     res.header('Access-Control-Allow-Headers', 'x-requested-with');
	       
	     // intercept OPTIONS method
	     if ('OPTIONS' == req.method) {
	       res.send(200);
	     }
	     else {
	       next();
	     }
	 };
	 app.use(allowCrossDomain);
});



app.get("/docs", function (request, response) {
	try {
		response.json(docs);
	} catch (exeception) {
		response.send(404);
	}
});


app.listen(8001); //to port on which the express server listen
console.log("application server running on http://localhost:8001/");