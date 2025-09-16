//function constructor
function mhs(nama, energi) {
    this.nama = nama;
    this.energi = energi;

    mhs.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    };

    mhs.main = function (jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat main!`);
    };
    return mhs;
}

let aku = new mhs("Aku", 10);
let kamu = new mhs("Kamu", 10);