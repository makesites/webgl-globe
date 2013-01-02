var fs = require("fs"), 
	jade = require("jade"), 
	path = require("path");

exports.version = '0.1.0';

exports.create = function( container, data ){
		var globe = fs.readFileSync( path.join(__dirname, "../views/webgl-globe.jade"), 'utf8');

		// Compile template rendering function
		globe = jade.compile(globe, { pretty: true});
	
		return globe({ container: container, data: data });
		
	};
