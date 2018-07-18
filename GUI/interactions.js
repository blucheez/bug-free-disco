// array to store the requested data input names
var entries = ["Name", "wod", "Year"];

// create the inputs and outputs
for(var i = 0; i < entries.length; i++) {
  $("#inputs").append(stringInputCard(entries[i]));
}

// run this function every time the user submits all of the inputs
function update() {
  // will be sending a JSON object to the server to process
  var toSend = [];
  // iterate over all of the arguments, add them to the toSend object
  for(var i = 0; i < entries.length; i++) {
    var value = ($("#input" + entries[i]).val());
    toSend[entries[i]] = value;
  }

  console.log(toSend)
}
