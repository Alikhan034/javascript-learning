var purchase1 = {
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
purchase2.totalprice();
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

// Test the manager function
console.log(manager());
