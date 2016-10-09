//UI LOGIC
var Numeralize = require('./../js/scripts.js').numeralizeModule;

$(document).ready(function(){
  $("form").submit(function(event){
    var userInput = $("input#natural-number").val();
    var result = Numeralize(userInput);
    $("#output").text(result);
    event.preventDefault();
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#output').prepend("<p>Thank you, " + email + " has been added to our list!</p>");
  });
});
