console.log("=======Looping=======");
//For Looping
for (let x = 1; x <= 10; x++) {
  if (x % 2 == 0) console.log(x);
}

//While Looping
let y = 1;
while (y <= 10) {
  if (y % 2 == 0) {
    console.log(y);
  }
  y++;
}

//Do While Looping
let z = 1;
do {
  if (z % 2 == 0) {
    console.log(z);
  }
  z++;
} while (z <= 10);

//For statement 'of' for getValue, 'in' for getIndex
const myArray = ["Amelia", "Harper", "Evelyn", "Abigail", "Emily"];
for (let listArray of myArray) {
  console.log(listArray);
}

//For statement 'each' & 'map' are same for get Value and Index
myArray.forEach((value, index) => {
  console.log(value, index+1);
});

//loop & sum using array data
const a = [3, 5, 12];
let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);
console.log("=======Looping=======");
