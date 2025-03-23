let top3 = ["America", "Australia", "Germany"];
function showitem(place1, place2, place3, place4, place5, place6, place7) {
  console.log("First visit " + place1);
  console.log("Then visit " + place2);
  console.log("Then finished with " + place3);
  console.log(place4);
  console.log(place5);
  console.log(place6);
  console.log(place7);
}
//+ two arrays into single array
let top7 = [...top3, "England", "UAE", "Newzeland", "Italy"];

//showitem(top3[0], top3[1], top3[2]);
showitem(...top7);

// Part 1: Separate Array Elements using spread operator
const topSixRestaurants = [
  "Chick-fil-A",
  "In-N-Out",
  "Chipotle",
  "McDonald's",
  "Taco Bell",
  "KFC",
];
const [first, second, third, ...remaining] = topSixRestaurants;
console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

// Part 2: Handle Unknown Function Arguments
function unknownArgs(...args) {
  // Your code here
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
unknownArgs(1, 2, 3, 4, 5);
unknownArgs("a", "b", "c");

// Part 3: Merge Arrays
const favoriteBaseballTeams = [
  "Yankees",
  "Mets",
  "Dodgers",
  "Giants",
  "Red Sox",
  "Cubs",
];
const favoriteFootballTeams = [
  "Patriots",
  "Giants",
  "Jets",
  "Eagles",
  "Steelers",
  "Cowboys",
];
const favoriteTeams = [...favoriteBaseballTeams, ...favoriteFootballTeams];
console.log(favoriteTeams);
