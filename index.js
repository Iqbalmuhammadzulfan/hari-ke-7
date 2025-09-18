const prompt = require("prompt-sync")();
const cetakNama = require("./coba.js");

let nama = prompt("Masukkan nama: ");
console.log(cetakNama(nama));
