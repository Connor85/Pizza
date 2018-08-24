// business logic

function Pizza (size,toppingOne, toppingTwo, toppingThree) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
}

Pizza.prototype.order = function() {
  return "<p>" + "Your " + this.size + " " + this.toppingOne + " "+ this.toppingTwo + " " + this.toppingThree + " pizza will arrive soon." + "</p>";
}

// user logic

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppingOne = $("#toppingOne").val();
    var inputtedToppingTwo = $("#toppingTwo").val();
    var inputtedToppingThree = $("#toppingThree").val();

    var newPizza = new Pizza (inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree);

    $("#result").append("<p>" + newPizza.order() + "</p>");

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ")
    $('#toppingThree').val(" ")
  });
});
