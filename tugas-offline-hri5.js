const prompt = require('prompt-sync')();
let siswa = [];

while (true) {
  console.log(`\n=== MENU DATA SISWA ===
1. Tambah Data
2. Tampilkan Data
3. Hapus Data
4. Cari Data
5. Keluar`);
  
  const pilih = prompt("Pilih menu (1-5): ");

  switch (pilih) {
    case "1":
      siswa.push({
        nama: prompt("Nama   : "),
        alamat: prompt("Alamat : "),
        nohp: prompt("No HP  : ")
      });
      console.log(">> Data siswa ditambahkan!");
      break;

    case "2":
      console.log("\n--- Daftar Siswa ---");
      siswa.length
        ? siswa.forEach((s, i) => console.log(`${i + 1}. ${s.nama} | ${s.alamat} | ${s.nohp}`))
        : console.log("Belum ada data.");
      break;

    case "3":
      if (!siswa.length) { console.log("Tidak ada data."); break; }
      siswa.forEach((s, i) => console.log(`${i + 1}. ${s.nama}`));
      const idx = parseInt(prompt("Nomor yang dihapus: "));
      idx > 0 && idx <= siswa.length
        ? (siswa.splice(idx - 1, 1), console.log(">> Data dihapus."))
        : console.log("Nomor tidak valid.");
      break;

    case "4":
      if (!siswa.length) { console.log("Belum ada data."); break; }
      const key = prompt("Kata kunci: ").toLowerCase();
      const hasil = siswa.filter(s =>
        s.nama.toLowerCase().includes(key) ||
        s.alamat.toLowerCase().includes(key) ||
        s.nohp.includes(key)
      );
      hasil.length
        ? hasil.forEach((s, i) => console.log(`${i + 1}. ${s.nama} | ${s.alamat} | ${s.nohp}`))
        : console.log(">> Data tidak ditemukan.");
      break;

    case "5":
      console.log("Terima kasih, program selesai.");
      process.exit();

    default:
      console.log("Pilihan tidak valid, silakan ulangi.");
  }
}
