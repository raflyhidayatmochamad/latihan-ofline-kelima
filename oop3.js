//object literal
let mhs1 = {
    nama : "Ade",
    energi : 10,
    makan : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }   
}

let mhs2 = {
    nama : "Asep",
    energi : 20,
    makan : function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!`);
    }
}

// Contoh pemanggilan
mhs1.makan(5);
mhs2.makan(3);