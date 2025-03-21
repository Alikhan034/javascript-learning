/*var purchase1 = {
  shoePrice: 120,
  tax: 1.6,
  totalprice: function () {
    var cal = this.shoePrice * this.tax;
    console.log("calculation: ", cal);
  },
};
purchase1.totalprice();
var purchase2 = {
  carPrice: 2000000,
  tax: 4,
  totalprice: function () {
    var cal = this.carPrice * this.tax;
    console.log("calculation: ", cal);
  },
};
purchase2.totalprice();*/
//assignment

class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }

  sleep() {
    this.energy += 10;
  }

  doSomethingFun() {
    this.energy -= 10;
  }
}

class Worker extends Person {
  constructor(name, age, energy, xp = 0, hourlyWage = 10) {
    super(name, age, energy); // Call the parent class constructor
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
  }
}

function manager() {
  const manager = new Worker("Alice", 30, 120, 100, 30);
  manager.doSomethingFun();
  return manager;
}
var per2 = new Person();
// Test the manager function
/*console.log(manager());
console.log(Object.keys(per2));
console.log(Object.values(per2));
console.log(Object.entries(per2));*/
for (const key of Object.keys(per2)) {
  console.log("key: ", per2[key]);
}

const obj = { a: 1, b: 2 };
for (let key in obj) {
  console.log(key); // "a", "b"
}

const arr = [10, 20, 30];
for (let val of arr) {
  console.log(val); // 10, 20, 30
}
