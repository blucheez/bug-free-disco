// framework for handling http interactions
var app = require("express")();
// body parser lets us read input
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

// the array of programs
var programs = ["add", "subtract"];

// path to directory of the app (wheras dirname goes to index.js)
var path = __dirname;

// port used for heroku app
var port = process.env.PORT || 3000;

// allow us to store session data
app.use(require("express-session")({secret: "why does this exist"}));
// allow free access to the public files
app.use(require("express").static("GUI"));

// the default directory goes straight to home page
app.get("/", function(req, res) {
  res.sendFile(path + "/GUI/index.html");
});

// returns the name of programs
app.get("/programs", function(req, res) {
  res.send(programs);
});

// add function adds numbers
app.get("/add", function(req, res) {
  var num1, num2;
  console.log(req.body);
  res.send(["num1", "num2"]);
});

app.get("/subtract", function(req, res) {
  var num1, num2;
  console.log(req.body);
  res.send(["sub1", "sub2"]);

});

// start the server
app.listen(port, function() {
  console.log("Listening on " + port);
});
