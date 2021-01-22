const request = require("./request");

function main() {
  request();
  setInterval(request, 60 * 1000);
}

main();
