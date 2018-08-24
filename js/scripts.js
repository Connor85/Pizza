// business logic

function Pizza (size,topping) {
  this.size = size;
  this.topping = topping;
}

// user logic

$(document).ready(function(){
  $("form#pizzaOrder").submit(function(event){
    event.preventDefault();

    var inputtedSize = $("#size");
    var inputtedToppingOne = $("#toppingOne")
    var inputtedToppingOne = $("#toppingTwo")
    var inputtedToppingOne = $("#toppingThree")

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ")
    $('#toppingThree').val(" ")
  });
});
