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
    if (!token) failed("Key Required");
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

//Async Await Statement
async function user() {
  try {
    const { token } = await login("Abigail");
    const { key } = await getUser(token);
    const { name } = await getData(key);

    console.log(`Your Token is : ${token}
Your Key is : ${key}
This is your data : ${name}
      `);
  } catch (error) {
    console.log(error);
  }
}

user();
