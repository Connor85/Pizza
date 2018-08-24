// business logic

function Pizza (size,toppingOne, toppingTwo, toppingThree, sideOrder) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.sideOrder = sideOrder
}

Pizza.prototype.order = function() {
  return "<p>" + "Your " + this.size + " " + this.toppingOne + " "+ this.toppingTwo + " " + this.toppingThree + " pizza " + "and " + this.sideOrder + " will arrive soon." + "</p>";
}

var prices = 12
var cost = function(prices) {
  if (size === ("#medium"))
  {return prices + 5
  } else if (size === ("#large")){
    return prices + 10
  } else {
    return prices
  }
}

// user logic

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("#size").val();
    var inputtedToppingOne = $("#toppingOne").val();
    var inputtedToppingTwo = $("#toppingTwo").val();
    var inputtedToppingThree = $("#toppingThree").val();
    var inputtedSideOrder = $("#sideOrder").val();

    var newPizza = new Pizza (inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedSideOrder);

    $("#result").append("<p>" + newPizza.order() + "$" + cost(prices) + "</p>");

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ");
    $('#toppingThree').val(" ");
    $('#sideOrder').val(" ");
  });
});
