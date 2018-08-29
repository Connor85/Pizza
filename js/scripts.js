// business logic

function Pizza (size,toppingOne, toppingTwo, toppingThree, sideOrder) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.sideOrder = sideOrder
}

Pizza.prototype.order = function() {
  return "Your " + this.size + " " + this.toppingOne + " "+ this.toppingTwo + " " + this.toppingThree + " pizza " + "and " + this.sideOrder + " will  cost ";
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    return price=12;
  } else if (this.size === "medium") {
    return price=16;
  } else if (this.size === "large") {
    return price=22;
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

    $("#result").text(newPizza.order() + "$" + newPizza.cost());

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ");
    $('#toppingThree').val(" ");
    $('#sideOrder').val(" ");
  });
});

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ");
    $('#toppingThree').val(" ");
    $('#sideOrder').val(" ");
  });
});
