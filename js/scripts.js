// business logic

function Pizza (size,toppingOne, toppingTwo, toppingThree, sideOrder) {
  this.size = size;
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
  this.sideOrder = sideOrder;
  this.address = [];
}

function Address(firstName, lastName, street, city, state) {
  this.firstName = firstName
  this.lastName = lastName
  this.street = street;
  this.city = city;
  this.state = state;
}

Pizza.prototype.order = function() {
  return "<p>" + "Your " + this.size + " " + this.toppingOne + " "+ this.toppingTwo + " " + this.toppingThree + " pizza " + "and " + this.sideOrder + " will arrive soon." + "</p>";
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
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

    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedStreet = $("input#street").val();
    var inputtedCity = $("input#city").val();
    var inputtedState = $("input#state").val;

    var newPizza = new Pizza (inputtedSize, inputtedToppingOne, inputtedToppingTwo, inputtedToppingThree, inputtedSideOrder);

    var newAddress = new Address (inputtedFirstName, inputtedLastName, inputtedStreet, inputtedCity, inputtedState)

    var price = 12
    var cost = function(prices) {
      if (inputtedSize = medium)
      { return prices + 5
      } else if (inputtedSize = large){
        return prices + 10
      } else {
        return prices
      }
    }

    $("#result").append("<p>" + newPizza.order() + "$" + cost(price) + "</p>");

    $('#size').val(" ");
    $('#toppingOne').val(" ");
    $('#toppingTwo').val(" ");
    $('#toppingThree').val(" ");
    $('#sideOrder').val(" ");
    $("input#first-name").val(" ");
    $("input#last-name").val(" ");
    $("input#street").val(" ");
    $("input#city").val(" ");
    $("input#state").val(" ");

  });
});
