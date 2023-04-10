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

//loop & sum using array data
const a = [3, 5, 12];
let sum = 0;

for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);
console.log("=======Looping=======");
