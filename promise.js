const token = ~~[Math.random() * 12345678];
const dataName = ["Chloe", "Ella", "Grace", "Scarlett", "Victoria"];

//Using Promise
function login(username) {
  console.log("Processing Username...");
  return new Promise((succes, failed) => {
    setTimeout(() => {
      if (!username) failed("Empty Data");
      succes({ token });
    }, 300);
  });
}

function getUser(token) {
  console.log("Processing Key...");
  return new Promise((succes, failed) => {
    if (!token) failed("Cannot Acces...");
    setTimeout(() => {
      succes({ key: "xKey" });
    }, 500);
  });
}

function getData(key) {
  console.log("Processing Data...");
  return new Promise((succes, failed) => {
    if (!key) failed("Invalid Key");
    setTimeout(() => {
      succes({ name: dataName });
    }, 1500);
  });
}

//Promise Chain
login("Abigail")
  .then((response) => getUser(response))
  .then((response) => getData(response))
  .then((response) => console.log(response.name))
  .catch((error) => console.error(error));
