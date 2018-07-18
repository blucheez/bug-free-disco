// array to store the requested data input names
var entries = ["Name", "wod", "Year"];

// name of the program currently on the GUI
var programName;

$(document).ready(function() {
  // initialize the app, get the list of programNames
  // $.get("/programs", function(data) {
  //   // data should have an array of programs available
  //
  // });

  // create the inputs and outputs
  for(var i = 0; i < entries.length; i++) {
    stringInputCard(entries[i], "#inputs");
  }
});



// run this function every time the user submits all of the inputs
function update() {
  // will be sending a JSON object to the server to process
  var toSend = [];
  // iterate over all of the arguments, add them to the toSend object
  for(var i = 0; i < entries.length; i++) {
    var value = ($("#input" + entries[i]).val());
    toSend[entries[i]] = value;
  }

  console.log(toSend);
  // $.get("/" + programName, function(data) {
  //   // in some way or another, the data should have the output and the type
  //   console.log(data);
  // });
}
