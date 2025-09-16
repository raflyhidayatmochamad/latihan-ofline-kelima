const prompt = require('prompt-sync')();

let mahasiswa = [
    {nama: "Budi",nilai : 85},
    {nama: "Andi",nilai : 92},
    {nama: "Siti",nilai : 58},
    {nama: "Ani",nilai : 60},
];

// 1. Data mahasiswa
console.log("\nDaftar nilai mahasiswa:");
mahasiswa.forEach(mhs => {
    let status;
    if (mhs.nilai >= 60) {
        status = "Lulus";
    } else {
        status = "Tidak Lulus";
    }
    console.log(`${mhs.nama}: - Nilai: ${mhs.nilai} - Status: ${status}`);
});

//2.Array baru mahasiswa
let daftarNama = mahasiswa.map(mhs => mhs.nama);
console.log("\nDaftar Nilai mahasiswa:", daftarNama);

//3. Berdsarakan nilai tertinggi
let urutNilai = [...mahasiswa].sort((a,b) => b.nilai - a.nilai);
console.log("\nDaftar nilai mahasiswa berdasarkan nilai tertinggi:");
urutNilai.forEach(mhs => console.log(`${mhs.nama}: - ${mhs.nilai}`));

//4. Cari mahasiswa berdasarakan nama
// let cariNama = prompt("\nMasukkan nama mahasiswa yang dicari: ");
// let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());
// if (hasilCari) {
//     let status = hasilCari.nilai >= 60 ? "Lulus" : "Tidak Lulus";
//     console.log(`\nDitemukan : ${hasilCari.nama} dengan nilai ${hasilCari.nilai} - Status: ${status}`);
// } else {
//     console.log("Mahasiswa tidak ditemukan.");
// }

// 4. Cari mahasiswa berdasarkan nama – **looping dengan for**
const jumlahPencarian = parseInt(
    prompt("\nBerapa kali ingin mencari nama mahasiswa? ")
);

for (let i = 0; i < jumlahPencarian; i++) {
    let cariNama = prompt(`\nPencarian ke-${i + 1} - Masukkan nama mahasiswa: `);

    let hasilCari = mahasiswa.find(
        mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase()
    );

    if (hasilCari) {
        let status = hasilCari.nilai >= 60 ? "Lulus" : "Tidak Lulus";
        console.log(
            `Ditemukan: ${hasilCari.nama} dengan nilai ${hasilCari.nilai} - Status: ${status}`
        );
    } else {
        console.log("Mahasiswa tidak ditemukan.");
    }
}

// // 4. Loop pencarian nama mahasiswa
// //    ➜ bisa diulang-ulang, tapi data tetap hanya 4 orang
// for (let i = 1; ; i++) {                 // for tanpa batas
//     let cariNama = prompt(`\nPencarian ke-${i} (ketik 'q' untuk keluar): `);

//     // keluar jika ketik q / exit
//     if (cariNama.toLowerCase() === 'q' || cariNama.toLowerCase() === 'exit') {
//         console.log("Pencarian selesai.");
//         break;
//     }

//     // cari di array 4 data
//     let hasilCari = mahasiswa.find(
//         mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase()
//     );

//     if (hasilCari) {
//         let status = hasilCari.nilai >= 60 ? "Lulus" : "Tidak Lulus";
//         console.log(
//             `Ditemukan: ${hasilCari.nama}, Nilai: ${hasilCari.nilai}, Status: ${status}`
//         );
//     } else {
//         console.log("Mahasiswa tidak ditemukan.");
//     }
// }


