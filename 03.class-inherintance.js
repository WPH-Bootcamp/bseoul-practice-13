// parent class (kelas induk)
class Hewan {
  // akan otomatis di jalankan ketika kita membuat objek baru.
  // membuat baru menggunakan new
  // constructor => untuk mengisi nama hewan
  constructor(nama) {
    this.nama = nama;
  }

  // Method umum untuk semua hewan
  // kucing, burung, anjing, bebek, ayam, dll
  bersuara() {
    console.log(`${this.nama} mengeluarkan suara`);
  }

  // Method umum untuk semua hewan
  // kucing, burung, anjing, bebek, ayam, dll
  berjalan() {
    console.log(`${this.nama} berjalan`);
  }

  // Method umum untuk semua hewan
  // kucing, burung, anjing, bebek, ayam, dll
  berlari() {
    console.log(`${this.nama} berlari`);
  }
}

// Pewarisan (Inheritance) => menyambung ke class Hewan
// class extends bisa menggunakan method dari class induk
// children pertama
class Kucing extends Hewan {
  // method spesifik hanya untuk kucing
  bersuara() {
    console.log(`${this.nama} berkata meongggg!`);
  }

  menjilatBulu() {
    console.log(`${this.nama} sedang menjilat bulu`);
  }
}

// children kedua
class Anjing extends Hewan {
  // method spesifik hanya untuk kucing
  bersuara() {
    console.log(`${this.nama} berkata guk guk!`);
  }
}

// OBJECT PERTAMA
// memanggil class kucing dengan method bersuara
const kucing1 = new Kucing("Chimmy");
// memanggil method bersuara
kucing1.bersuara();

// memanggil method berjalan
kucing1.berjalan();

// memanggil method menjilat bulu
kucing1.menjilatBulu();

// OBJECT KEDUA
// memanggil class anjing dengan method bersuara
const anjing1 = new Anjing("Bulldog");
// memanggil method bersuara
anjing1.bersuara();

// memanggil method berjalan
anjing1.berjalan();
