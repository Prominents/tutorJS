let name = "Alex";
console.log(name);

//Array
let ordinal = [];
ordinal[1] = "alef";
ordinal[2] = "bet";
ordinal[3] = "gimel";
ordinal[4] = "dalet";
ordinal[5] = "he";

console.log(ordinal);

//Looping Using For & Mapping Array
for (i = 0; i < ordinal.length; i++) {
  console.log(ordinal[i]);
}

//Looping Using Do While
let x = 0;

do {
  x++;
  console.log("Loop");
} while (x < 10);

//Looping Using While
while (x > 0) {
  x--;
  console.log("Try Again");
}

//Get Date & Day
const date = new Date();

let weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = weekDay[date.getDay()];
console.log(`The Date is ${date}`);
console.log(`This day is ${day}`);
