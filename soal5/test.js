const axios = require("axios");
const faker = require("faker");

let counter = 1;

function request() {
  const options = { headers: { accept: "application/json" } };
  axios.post(
    "http://localhost:3000",
    {
      counter,
    },
    {
      headers: {
        accept: "application/json",
        "X-RANDOM": faker.random.word(),
      },
    }
  ).then(() => {
      counter++
  });
}

const interval = setInterval(request, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
