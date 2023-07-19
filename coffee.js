let coefficientBySize = {
  small: 1,
  medium: 2,
  large: 3,
};

let coefficientByType = {
  latte: 3,
  capuchino: 2.5,
  americano: 1.5,
};

let coefficientByTopping = {
  whiteSugar: 0,
  caneSugar: 0,
  cinnamon: 0,
};

let coffeeIngridients = {
  coffee: "Arabica coffee",
  water: "Spring water",
  milk: "Cow milk",
};

let toppingIngridients = {
    toppingOne: "White sugar,",
    toppingTwo: "Cane sugar,",
    toppingThree: "Cinnamon,",
  };


const submitButton = document.getElementById("submitButton");

submitButton.onclick = () => {
  const form = document.querySelector("form");
  const formData = new FormData(form);
  const typeCoffee = formData.get("type_coffee");
  const sizeCoffee = formData.get("size_coffee");
  const toppingCoffee = formData.getAll("topping_coffee");

  if (!typeCoffee || !sizeCoffee) {
    console.log("Please select a type and size of coffee.");
    return;
  }

  const basePrice =
    coefficientBySize[sizeCoffee] * coefficientByType[typeCoffee];
  let toppingPrice = 0;
  toppingCoffee.forEach((topping) => {
    toppingPrice += coefficientByTopping[topping];
  });
  let totalPrice = basePrice + toppingPrice;
  console.log("Coffee order details:", {
    typeCoffee,
    sizeCoffee,
    toppingCoffee,
    basePrice,
    toppingPrice,
    totalPrice,
  });

  const priceContainer = document.getElementById("price");
  priceContainer.innerText = totalPrice + " $";

  const orderMessage = `You have selected a ${typeCoffee} coffee of size ${sizeCoffee}. Your coffee will cost ${totalPrice} $`;
  document.getElementById("order").innerText = orderMessage;

  const recipeMessage = `Coffee recipe for ${typeCoffee}
  1. Take a coffee maker and pour the required amount of ${coffeeIngridients.water} into it.
  2. Put the ground ${coffeeIngridients.coffee} into the coffee maker.
  3. Put the coffee maker on the fire and let the coffee brew for 5 minutes.After the time has elapsed, turn off the fire under the coffee maker.
  4. Take the ${coffeeIngridients.milk} and beat it until foamy using a whisk or other suitable tool.
  5. Pour the brewed coffee from the coffee maker into a cup. Add frothed milk
  6. Add toppings as you wish ${toppingIngridients.toppingOne} ${toppingIngridients.toppingTwo} ${toppingIngridients.toppingThree}
  Enjoy your coffee!`;
  document.getElementById("recipe").innerText = recipeMessage;
};
