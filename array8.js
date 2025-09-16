// let angka = [1, 2, 3, 4, 5];

//for each -> hanya looping
// angka.forEach(num => console.log(num*2));
// console.log(angka)

// //map-> menghasilakan array baru
// let hasil = angka.map(num => num * 2);
// console.log(hasil);
//ouput:[2,4,6,8,10](array baru hasil transformasi)


// var angka = [1,2,3,4,5,6,7,8];
// angka.forEach(function(e){
//     console.log(e);
// });

// cara menggunakan foreach
var huruf = ['a','b','c','d','e'];
huruf.forEach(str =>{
    console.log(str );
})
console.log(huruf);
var hasil = huruf.map(str => str + 'aba');
console.log(hasil);

//output : ['aaba','baba','caba','daba','eaba']

//cara dengan map saja
var huruf = ['a', 'b', 'c', 'd', 'e'];
var hasil = huruf.map(huruf => huruf + 'aba');
console.log(hasil);
//output : ['aaba','baba','caba','daba','eaba']

// degan for biasa
var huruf = ['a', 'b', 'c', 'd', 'e'];
var hasil = []; 
for (var i = 0; i < huruf.length; i++) {
    hasil.push(huruf[i] + 'aba');
}  
console.log(hasil);
//output : ['aaba','baba','caba','daba','eaba']

// kesimpulan
// foreach hanya untuk looping saja
// map untuk looping dan menghasilkan array baru
// for biasa bisa untuk looping dan menghasilkan array baru dengan push
// for biasa lebih fleksibel 