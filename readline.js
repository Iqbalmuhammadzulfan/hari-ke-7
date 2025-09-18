const readln=require ('readline');
const rl=readln.createInterface({
    input : process.stdin,
    output : process.stdout,

});

/*rl.question ('Masukkan Nama Anda :',(nama)=>{
    console.log(`Terima Kasih ${nama}`);
    rl.close();
})*/

rl.question ('Masukkan Nama Anda :', (nama)=>{
    rl.question('Masukkan No Hp :', (nohp)=> {
        console.log(`Terima kasih ${nama}, sudah input ${nohp}`);
        rl.close();
})
});
