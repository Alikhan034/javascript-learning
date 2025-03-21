// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (var itm of dairy) {
    console.log(itm);
  }
}
logDairy();
// Task 2
const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (let prp of Object.keys(bird)) {
    console.log(`${prp}: ${bird[prp]}`);
  }
}
birdCan();

// Task 3

function animalCan() {
  for (let prp1 in birdCan) {
    console.log(`${prp1}: ${bird[prp1]}`);
  }
}
animalCan();
