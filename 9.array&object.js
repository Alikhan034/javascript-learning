/*var clothes=[];
clothes.push("T-Shirt","Trouser","Shalwar","Kameez","Hoodie");

clothes.pop(clothes[4]);

clothes.push("Jacket","Buffer");
console.log(clothes[2]);
var favcar={
    color:"Blue",
}
favcar.covertible=true;
console.log(favcar);
*/
var car = {};

car.color = "red";

//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
  console.log('engine running'); 
}
console.log(car)
car.turnKey();
console.log(typeof(car));