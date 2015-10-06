/*
	Node Server

	This server dudette sends static files at localhost:8080/ and acts as an API
	at localhost:8080/piratespeak
*/

// Start an express app
var express = require("express");
var app = express();

var path = require("path");
var staticPath = path.join(__dirname, "public");

var staticHandler = express.static(staticPath);
app.use(staticHandler);

var dictionary = require("./pirate-dictionary.js");
console.log(dictionary.translate("women are beautiful."));

app.get("/piratespeak", function(request, response) {
	var info = {
		status: {
			version: 1,
			message: "Success"
		},
		translation: ""
	}


	info.translation = dictionary.translate(request.query.text);
	// console.log(dictionary.translate(request.query.text));
	response.send(info);
});

app.all("*", function(request, response) {
	response.status(404);
	response.send("Bad Request");
});

var envPort = process.env.PORT;
if (envPort !== undefined) app.listen(envPort);
else app.listen(8080);

