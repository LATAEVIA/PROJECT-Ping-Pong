// Business Logic
function pingPongFunct(pingPongBot){
  var pingPongResults = [];
  for (index = 1; index <= pingPongBot; index++) {
    if ((index % 3 === 0) && (index % 5 === 0)) {
        pingPongResults.push('<li>pingpong</li>');
    }
    else if (index % 3 === 0) {
        pingPongResults.push("<li>ping</li>");
    }
    else if (index % 5 === 0) {
        pingPongResults.push("<li>pong</li>");
    }
    else {
        pingPongResults.push("<li>" + index + "</li>");
    }
  }return pingPongResults;
};

// User Interface Logic
$(document).ready(function() {
  $("form#pingPongInput").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#userInput").val());
    var results = pingPongFunct(input);
    $("#output").empty().append(results);
  });
});


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
//
// if ((index % 3 === 0) && (index % 5 === 0)) {
//     $("#output").append("<li>pingpong</li>");
// }
// else if (index % 3 === 0) {
//     $("#output").append("<li>ping</li>");
// }
// else if (index % 5 === 0) {
//     $("#output").append("<li>pong</li>");
// }
// else {
//     $("#output").append("<li>" + index + "</li>");
// }
