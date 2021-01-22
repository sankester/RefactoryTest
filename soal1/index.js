var currencyFormatter = require("currency-formatter");
var lib = require("./lib");
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
  "command :  \n* nama-warung <nama>  \n* tanggal <tanggal> \n* nama-kasir <name> \n* tambah <nama> <harga> \n* print \n* reset \n* exit"
);

rl.prompt();

rl.on("line", (input) => {
  var [command, ...text] = input.split(" ");

  switch (command) {
    case "nama-warung":
      struct.namaWarung = text.join(" ");
      break;
    case "tanggal":
      struct.tanggal = text;
      break;
    case "nama-kasir":
      struct.namaKasir = text.join(" ");
      break;
    case "tambah":
      const [nama, harga] = text;
      struct.products.push({
        nama,
        harga,
      });
      break;
    case "print":
      let total = struct.products.reduce(
        (totalHarga, product) => totalHarga + parseInt(product.harga),
        0
      );

      lib.printInCenter(struct.namaWarung);
      lib.printLeftRight(
        "Tanggal",
        struct.tanggal === ""
          ? new Date().toLocaleString()
          : new Date(struct.tanggal).toLocaleString()
      );
      lib.printLeftRight("Nama Kasir", struct.namaKasir);
      lib.printInCenter("==============================");
      struct.products.forEach((product) =>
        lib.printLeftRight(
          product.nama,
          currencyFormatter.format(parseInt(product.harga), {
            locale: "id-ID",
          }),
          "."
        )
      );
      console.log("\n");
      if(total > 0 ){
        lib.printLeftRight(
          "Total",
          currencyFormatter.format(total, {
            locale: "id-ID",
          }),
          "."
        );
      } else {
        lib.printInCenter('Input Item Dulu ^-^')
      }

      struct.products = [];
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
      console.log(`${command} command not found!`);
  }

  rl.prompt();
});
