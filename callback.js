const token = ~~[Math.random() * 12345678];
const dataName = ["Chloe", "Ella", "Grace", "Scarlett", "Victoria"];

//Using Callback
function login(username, callback) {
  console.log("Processing Username...");
  setTimeout(() => {
    callback({ token, username });
  }, 200);
}

function getUser(token, callback) {
  console.log("Processing Key...");
  if (token)
    setTimeout(() => {
      callback({ key: "xKey" });
    }, 300);
}

function getData(key, callback) {
  console.log("Processing Data...");
  if (key)
    setTimeout(() => {
      callback({ name: dataName });
    }, 1500);
}

//Nested Callback
login("Abigail", (response) => {
  const token = response;
  getUser(token, (response) => {
    const key = response;
    getData(key, (response) => {
      const name = response;
      console.log(name)
    });
  });
});
