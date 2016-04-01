// $(document).ready(function() {
//   $("form#pingPongInput").submit(function(event){
//     event.preventDefault();
//     var userInput = parseInt($("input#userInput").val());
//     var bullets = "";
//
//     for (index = 1; index <= userInput; index++) {
//       bullets += "<li>";
//       if ((index % 3 === 0) && (index % 5 === 0)) {
//           bullets += "ping-pong";
//       }
//       else if (index % 3 === 0) {
//           bullets += "ping";
//       }
//       else if (index % 5 === 0) {
//           bullets += "pong";
//       }
//       else {
//           bullets += index;
//       }
//       bullets += "</li>";
//       $("#output").empty().append(bullets);
//     }
//   });
// });


// Business Logic
var pingPongFunction = function(userInput){
  for (index = 1; index <= userInput; index++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
        $("#output").append("<li>pingpong</li>");
    }
    else if (index % 3 === 0) {
        $("#output").append("<li>ping</li>");
    }
    else if (index % 5 === 0) {
        $("#output").append("<li>pong</li>");
    }
    else {
        $("#output").append("<li>" + index + "</li>");
    }
  }
};

// User Interface Logic
$(document).ready(function() {
  $("form#pingPongInput").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val());
    pingPongFunction(userInput)
      // $("#output").empty().append(result);
      // var pong = $("#output").empty().append("pong");
  });
});
