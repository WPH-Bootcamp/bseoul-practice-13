// class
class Product {
  // akan otomatis di jalankan ketika kita membuat objek baru.
  // membuat baru menggunakan new
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  // Method pertama
  getInfo() {
    return `${this.name} - Harga: Rp ${this.price}, Stok: ${this.stock}`;
  }

  // Method kedua
  sell(quantity) {
    // misal quantity itu adalah 4
    // apakah 4 barang lebih besar dari stok?
    if (quantity > this.stock) {
      return `Stok ${this.name} tidak cukup`;
    }

    // kalau misalkan dia mencukupi, berarti stok dikurangi jumlah pembelian
    this.stock -= quantity;
    return `${quantity} barang berhasil di jual`
  }
}

// membuat objek dari class product, menggunakan new
const laptop = new Product("Laptop", 50000000, 10)

// memanggil object dari laptop
// console.log(laptop)

// memanggil method getInfo sebelum di jual
console.log(laptop.getInfo())

// memanggil method sell, saya menjual 7 laptop
console.log(laptop.sell(7))

// memanggil output setelah di jual
console.log(laptop.getInfo())