// array to store the requested data input names
var entries = ["Name", "wod", "Year"];

// name of the program currently on the GUI
var programName = "";

$(document).ready(function() {
  if(programName === "") {
    $("#interface").hide();
    $("#welcome").show();
  }
  // initialize the app, get the list of programNames
  $.get("/programs", function(data) {
    // data should have an array of programs available
    console.log(data);
    for(var i = 0; i < data.length; i++) {
      addLink(data[i], "#links");
      addLink(data[i], "#mobileLinks");
    }
  });


});

// this function is run whenever the user selects a program from the navbar
function programSelect(name) {
  programName = name;
  $("#interface").show();
  $("#welcome").hide();

  // clear the old inputs
  $("#inputs").html("");

  // populate the inputs section with relevant variable names
  // the expectation is that, if we call the program without giving any
  // arguments, then the program will return an array of desired arguments
  $.get("/" + name, function(data) {
    // now the data has an array of desired entries
    entries = data;

    // create the inputs and outputs
    for(var i = 0; i < entries.length; i++) {
      stringInputCard(entries[i], "#inputs");
    }
  });
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

  console.log(toSend);
  $.ajax({
    url: '/' + programName,
    data: { str: 'Idk Whats Rc' },
    type: 'GET',
  });
}
