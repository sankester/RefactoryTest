function printInCenter(text, max = 30) {
  const length = text.length;
  if (length < max) {
    printSingleLineCenter(max, length, text);
  } else {
    const row = Math.floor(length / max);
    for (let r = 0; r <= row; r++) {
      let logText = text.substr(r * 30, max);
      printSingleLineCenter(max, logText.length, logText);
    }
  }
}

function printSingleLineCenter(max, length, text) {
  let padLen = (max - length) / 2;
  let padString = "";
  for (var i = 0; i < padLen; i++) {
    padString += " ";
  }
  console.log(`${padString}${text}`);
}

function printLeftRight(left, right, symbol = " ", max = 30) {
  const length = left.length + right.length;
  if (length < max) {
    printSingleLineLeftRight(max, length, left, right, symbol);
  }
}

function printSingleLineLeftRight(max, length, left, right, symbol) {
  let padLen = max - length;
  let padString = "";
  for (var i = 0; i < padLen; i++) {
    padString += symbol;
  }
  console.log(`${left}${padString}${right}`);
}

module.exports = {
  printInCenter,
  printLeftRight,
};
