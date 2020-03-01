//Parameters for the server
const express 	= require("express");
const bodyParser= require("body-parser");
const cors 		= require("cors");
const server 		= express();
const host 		= "https://homeapp-269710.appspot.com/";
const port 		= 5000;

//Dependencies server loading
server.use(bodyParser.json());
server.use(cors());

const posts = require("../routes/api/posts");
server.use("/api/posts", posts);

//Server start listening
server.listen(port, host, function () {
  console.log("Server running at http://"+ host +":"+ port + "");
});
