const prompt = require('prompt-sync')();

let produk = [
    {nama:"laptop",harga:15000000},
    {nama:"smartphone",harga:10000000},
    {nama:"tablet",harga:5000000},
    {nama:"smartwatch",harga:3000000},
];

//1. Data produk
console.log("\nDaftar harga produk:");
produk.forEach(prd => {
    console.log(`${prd.nama}: - Harga: Rp${prd.harga}`);
});

//2.Array baru produk
let daftarNama = produk.map(prd => prd.nama);
console.log("\nDaftar nama produk:", daftarNama);

//3. Berdsarakan harga tertinggi
let urutHarga = [...produk].sort((a,b) => b.harga - a.harga);
console.log("\nDaftar harga produk berdasarkan harga tertinggi:");
urutHarga.forEach(prd => console.log(`${prd.nama}: - Rp${prd.harga}`));

//4. Cari produk berdasarkan nama dengan do...while dan pilihan y/n
// let lanjut;
// do {
//     let cariNama = prompt("\nMasukkan nama produk yang dicari: ");
//     let hasilCari = produk.find(prd => prd.nama.toLowerCase() === cariNama.toLowerCase());  
//     if (hasilCari) {
//         console.log(`Ditemukan : ${hasilCari.nama} dengan harga Rp${hasilCari.harga}`);
//     } else {
//         console.log("Produk tidak ditemukan.");
//     }
//     lanjut = prompt("Ingin mencari produk lain? (y/n): ");
// } while (lanjut.toLowerCase() === 'y');


// 4. Pencarian produk dengan do...while
let lanjut;
do {
    let cariNama = prompt("\nMasukkan nama produk yang dicari: ");
    let hasilCari = produk.find(function (prd) {
        return prd.nama.toLowerCase() === cariNama.toLowerCase();
    });

    if (hasilCari) {
        let kategori;
        if (hasilCari.harga > 10000000) {
            kategori = "Mahal";
        } else {
            kategori = "Murah";
        }
        console.log(
            "Ditemukan: " + hasilCari.nama +
            " dengan harga Rp" + hasilCari.harga +
            " (" + kategori + ")"
        );
    } else {
        console.log("Produk tidak ditemukan.");
    }

    lanjut = prompt("Ingin mencari produk lain? (y/n): ");
} while (lanjut.toLowerCase() === "y");Z
