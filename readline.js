const readln=require ('readline');
const rl=readln.createInterface({
    input : process.stdin,
    output : process.stdout,

});

rl.question ('Masukkan Nama Anda :',(nama)=>{
    console.log(`Terima Kasih ${nama}`);
    rl.close();
})