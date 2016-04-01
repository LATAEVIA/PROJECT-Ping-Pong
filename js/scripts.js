$(document).ready(function() {
  $("form#pingPongInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    var listItems = "";

    for (index = 1; index <= userInput; index++) {
      listItems += "<li>";
      if ((index % 3 === 0) && (index % 5 === 0)) {
          listItems += "ping-pong";
      }
      else if (index % 3 === 0) {
          listItems += "ping";
      }
      else if (index % 5 === 0) {
          listItems += "pong";
      }
      else {
          listItems += index;
      }
      listItems += "</li>";
      $("#output").empty().append(listItems);
    }
  });
});
