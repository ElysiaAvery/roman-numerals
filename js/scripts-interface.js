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
