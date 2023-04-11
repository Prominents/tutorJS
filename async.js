const token = ~~[Math.random() * 12345678];
const dataName = ["Chloe", "Ella", "Grace", "Scarlett", "Victoria"];

function login(username) {
  return { token, username };
}

function getUser(token) {
  if (token) return { apiKey: "xKey" };
}

function getData(key) {
  if (key) return dataName;
}

const user = login("Abigail");
console.log(user);

const apiKey = getUser(user.token);
console.log(apiKey);

const getName = getData(apiKey)
console.log(getName)