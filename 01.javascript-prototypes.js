// cara 1 (tidak menggunakan protoType)
// method biodata
function biodata(nama, email) {
  this.nama = nama; // property nama (dinamis)
  this.email = email; // property email (dinamis)
//   return `nama saya ${nama}, email saya ${email}`;
}

// cara 2 (menggunakan protoType) - Pewarisan (inherintance)
biodata.prototype.introduction = function () {
  return `nama saya ${this.nama}, email saya ${this.email}`;
};

biodata.prototype.perkenalan = function () {
  return `nama saya ${this.nama}`;
};

// akses property nama
biodata.nama = "Taufik";
biodata.email = "taufik@gmail.com";

// kita memanggil sebuah properti
// console.log(biodata.nama);
// console.log(biodata.email);

// cara 1 - memanggil sebuah function tanpa prototype
// console.log(biodata("Taufik", "taufik@gmail.com")); // orang 1
// console.log(biodata("Taufik2", "taufik2@gmail.com")); // orang 2

// cara 2 = memanggil sebuah prototype
// new akan membentuk sebuah objek
const orangPertama = new biodata("Taufik3", "taufik3@gmail.com")
const orangKedua = biodata("Taufik3", "taufik3@gmail.com")
const perkenalan = new biodata("Taufik4")

console.log(perkenalan.perkenalan())

// 1. kita bisa memanggil method introduction
// console.log(orangPertama.introduction())

// 2. kita memanggil prototype nya
// console.log(orangPertama)
