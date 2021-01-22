const axios = require("axios");
const faker = require("faker");

let counter = 1;

function request() {
  const random = faker.random.alphaNumeric(8);
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
      if (counter == 1) {
        console.log(
          `first request with count ${counter} with random header '${random}', request again after 1 minute`
        );
      } else {
        console.log(
          `Request to server after 1 minute with count ${counter} with random header '${random}'`
        );
      }

      counter++;
    });
}

module.exports = request;
