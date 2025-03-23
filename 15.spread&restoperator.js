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
let top7 = [...top3, "England", "UAE", "Newzeland", "Italy"];

//showitem(top3[0], top3[1], top3[2]);
showitem(...top7);
