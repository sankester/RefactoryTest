const axios = require("axios");
const faker = require("faker");

let counter = 1;

function request() {
  const random = faker.random.alphaNumeric(8)
  axios
    .post(
      "http://localhost:3000",
      {
        counter,
      },
      {
        headers: {
          accept: "application/json",
          "X-RANDOM": random,
        },
      }
    )
    .then(() => {
      console.log(`Request to server with count ${counter} with random header '${random}'`);
      counter++;
    });
}

setInterval(request, 1000);