function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni","sausage"]);
var pizza2 = pizzaOven("hand tosesed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
var pizza4 = pizzaOven("hand tosesed","traditional",["mozzarella"],null);
var pizza4 = pizzaOven("hand tosesed","traditional",["mozzarella"],["chicken","onions"]);