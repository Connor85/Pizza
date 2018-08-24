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
    var inputtedTopping = $("topping")

    $('#size').val(" ");
    $('topping').val('');
  });
});
