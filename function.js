//new funtion
const multiple1 = new Function("x", "y", "console.log(x*y)");

//standard function
function multiple2(x, y) {
  console.log(x * y);
}

//arrow function
const multiple3 = (x, y) => {
  console.log(x * y);
};

multiple1(1, 7);
multiple2(3, 3);
multiple3(5, 3);

//function Randomize
function randomNumber() {
  const gacha = ~~(Math.random() * 1000);
  if (gacha > 500) {
    console.log("Up to 500+", gacha);
  } else {
    console.log(gacha);
  }
}
randomNumber();

function salary(name, salary, absent) {
  console.log(
    "Name :",
    name,
    "\nSalary Per-day :",
    salary,
    "\nDay Absent :",
    absent,
    "\nSalary Received :",
    salary * absent
  );
}

salary("Noa", 35000, 25);
