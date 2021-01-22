const fs = require("fs");

function initializeLog(filePath) {
  if (!fs.existsSync(filePath)) {
    fs.writeFile(filePath, "", (err) => {
      console.error(`${err}`);
    });
  }
}

function addLog(filePath, msg) {
  initializeLog(filePath);

  const stream = fs.createWriteStream(filePath, { flags: "a" });
  stream.once("open", function () {
    stream.write(msg + "\r\n");
  });
}

module.exports = {
  addLog,
};
