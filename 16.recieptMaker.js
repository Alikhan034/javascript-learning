// Dishes Data
const dishData = [
  { name: "Italian pasta", price: 9.55 },
  { name: "Rice with veggies", price: 8.65 },
  { name: "Chicken with potatoes", price: 15.55 },
  { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.2;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
  // Validate boolean first
  if (typeof taxBoolean !== "boolean") {
    console.log("You need to pass a boolean to the getPrices call!");
    return;
  }

  // Process all dishes
  for (const dish of dishData) {
    const finalPrice = taxBoolean ? dish.price * tax : dish.price;

    // Fixed space after $ and consistent formatting
    console.log(`Dish: ${dish.name} Price: $${finalPrice.toFixed(2)}`);
  }
}

// Task 2: Implement getDiscount()
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  // Validate guests input
  if (typeof guests === "number" && guests > 0 && guests < 30) {
    const discount = guests < 5 ? 5 : 10;
    // Fixed discount message formatting
    console.log(`Discount is: $${discount}`);
  } else {
    // Exact error message match
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Test calls
getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(false, 50);
