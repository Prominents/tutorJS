let array = ["zero", "alef", "bet", "gimel", "dalet", "he", "vav", "zayin"];

//check true or false
let arrayCheck = array.includes("he");

if (arrayCheck) {
  let arrayPosition = array.indexOf("he");
  let indexBefore = arrayPosition - 1;
  let indexAfter = arrayPosition + 1;
  let before = array[indexBefore];
  let after = array[indexAfter];
  let first = array.shift();
  let last = array.pop();

  console.log("First number is " + first);
  console.log("Last number is " + last);
  console.log(before);
  console.log(after);
  console.log(`Ordinal Number on ${arrayPosition}`);
} else {
  console.log("Array Check Fail");
}

let arrayIngot = [];

//Array non lenght
arrayIngot["Iron"] = "Fe";
arrayIngot["Gold"] = "Au";
arrayIngot["Copper"] = "Cu";
arrayIngot["Diamond"] = "C";

console.log(arrayIngot);

//Array Copy
let arrayFruit = ["🥝", "🥥", "🍊", "🍋", "🍌"]; //Original

//Model Copy
let fruit1 = [...arrayFruit];
let fruit2 = arrayFruit.slice();
let fruit3 = Array.from(arrayFruit);
let fruit4 = JSON.parse(JSON.stringify(arrayFruit));

fruit1[0] = "🍈";
fruit2[0] = "🍉";
fruit3[0] = "🍐";
fruit4[0] = "🍑";

console.log(arrayFruit);
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);

//Merge Array
let array1 = ["🍕", "🍔", "🍟"];
let array2 = ["🌭", "🍿", "🧂"];

let mergeArray = array1.concat(array2);

mergeArray.map((value, index) => console.log(index, value));

//Object
const data = [
  { name: "Zeus", origin: "Greek mythology", age: 6000 },
  { name: "Odin", origin: "Norse mythology", age: 5000 },
  { name: "Amaterasu", origin: "Japanese mythology", age: 4000 },
  { name: "Anubis", origin: "Egyptian mythology", age: 3000 },
  { name: "Shiva", origin: "Hindu mythology", age: 2000 },
  { name: "Apollo", origin: "Roman mythology", age: 1000 },
];

data.map((value, index) => {
  console.log(value.name);
});

//data has been Sorted & Filtered
data
  .sort((a, b) => a.age - b.age)
  .filter((x) => x.age > 3000)
  .map((value) => console.log(value))
