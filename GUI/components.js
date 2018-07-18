// creates a div for String input
// @ param a name for the query
// returns nothing, automatically adds
function stringInputCard(query, containerID) {
  // create the general area
  var area = document.createElement("div");
  $(area).addClass("col s12 m6 l3");

  // the card itself
  var card = document.createElement("div");
  $(card).addClass("card");

  // add the title and the input area
  var content = document.createElement("div");
  $(content).addClass("card-content");
  $(content).append("<span class='card-title'>" + query + "</span>");
  $(content).append("<input id='input" + query + "' type='text' name='" + query + "''/>");
  $(card).append(content);

  $(area).append(card);
  $(containerID).append(area);
}

// creates a navbar button for a given program name
// @ param a name for the navbar button, name for container id
// returns nothing, automatically adds
