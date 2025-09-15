let angka = [1, 2, 3, 4, 5];

//for each -> hanya looping
angka.forEach(num => console.log(num*2));
console.log(angka)

//map-> menghasilakan array baru
let hasil = angka.map(num => num * 2);
console.log(hasil);
//ouput:[2,4,6,8,10](array baru hasil transformasi)