//Parameters for the server
const express 	= require("express");
const bodyParser= require("body-parser");
const cors 		= require("cors");
const server 		= express();
const host 		= "127.0.0.1";
const port 		= 5000;

//Dependencies server loading
server.use(bodyParser.json());
server.use(cors());

const posts = require("../routes/api/posts");
server.use("/api/posts", posts);

const renderer = require('vue-server-renderer').createRenderer()
const Vue = require('vue');
// import App from './App.vue'
server.get('/', (req, res) => {
	const app = new Vue({
	data: {
	url: req.url
	},
	template: require('fs').readFileSync('@src/views/Home.vue', 'utf-8')
	})



	renderer.renderToString(app, (err, html) => {
	if (err) {
	res.status(500).send('Internal Server Error')
	return
	}
	res.end(html)
	})
})

//Server start listening
server.listen(port, host, function () {
  console.log("Server running at http://"+ host +":"+ port + "");
});

/*

const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(app).then(html => {
  console.log(html)
}).catch(err => {
  console.error(err)
})

server.get('/', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: "<div>The visited URL is: {{ url }}</div>"
  })



  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).send('Internal Server Error')
      return
    }
    res.send("Hola")
  })
})

server.listen(8080)


*/
