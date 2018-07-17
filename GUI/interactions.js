function requestProgram(name) {
  // this function sends a request to the server for the program
  $.get("/" + name, function(data) {
    return data;
  });
}
