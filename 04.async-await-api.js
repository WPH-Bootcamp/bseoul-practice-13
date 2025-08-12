// goals kita. mengambil laporan data cuaca menggunakan API
async function getWeather(maxretry = 3) {
  let percobaan = 0;
  try {
    while (percobaan < maxretry) {
      try {
        percobaan++;
        console.log(`Percobaan ke-${percobaan}`);

        const url = `https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=36.03.28.1002`;
        const res = await fetch(url); // pending, rejected, fulfilled

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const data = await res.json();
        const cuacalist = data.data[0].cuaca[0][0];

        console.log(`Waktu: ${cuacalist.local_datetime}`);
        console.log(`Suhu: ${cuacalist.t}°C`);
        console.log(`Cuaca: ${cuacalist.weather_desc}`);
        return; // berhenti kalau berhasil
      } catch (err) {
        console.warn(`Error: ${err.message}`);
        if (percobaan >= maxretry) throw err; // stop kalau sudah maksimal retry
        console.log("Mencoba lagi...");
      }
    }
  } catch (err) {
    console.error("Semua percobaan gagal:", err.message);
  } finally {
    console.log(
      "Proses pengecekan cuaca selesai (sukses atau gagal tetap jalan)."
    );
  }
}

getWeather();
