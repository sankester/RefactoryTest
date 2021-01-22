var { createInterface } = require("readline");

var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const struct = {
  namaWarung: "",
  tanggal: "",
  namaKasir: "",
  products: [],
};

console.log(
  "command :  \n- nama-warung <nama>  \n- tanggal <tanggal> \n- nama-kasir <name> \n- tambah-product <nama> <harga> \n- print \n- reset \n- exit"
);

rl.prompt();

rl.on("line", (input) => {
  var [command, ...values] = input.split(" ");

  switch (command) {
    case "nama-warung":
      struct.namaWarung = values.join(" ");
      break;
    case "tanggal":
      struct.tanggal = values;
      break;
    case "nama-kasir":
      struct.namaKasir = values.join(" ");
      break;
    case "tambah-product":
      const [nama, harge] = values;
      struct.products.push({
        nama,
        harge,
      });
      break;
    case "print":
      console.log(struct);
      break;
    case "reset":
      struct.namaWarung = "";
      struct.tanggal = "";
      struct.namaKasir = "";
      struct.products = [];
      break;
    case "exit":
      process.exit();
    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});
