const fs = require('fs');
const readln = require('readline');

const rl = readln.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dirpath = './data';
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath);
}

const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)) {
  fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question('Masukkan Nama Anda : ', (nama) => {
  rl.question('Masukkan No Hp : ', (nohp) => {
    rl.question('Masukkan Alamat : ', (alamat) => {
       rl.question('Masukkan Hobi : ', (hobi) => {
           const contact = { nama: nama, nohp: nohp, alamat:alamat, hobi:hobi };

           const file = fs.readFileSync(datapath, 'utf-8');
           const contacts = JSON.parse(file);
       
           // push data baru
           contacts.push(contact);
       
           // simpan kembali
           fs.writeFileSync(datapath, JSON.stringify(contacts, null, 2));
       
           console.log('✅ Data berhasil disimpan, nuhun pisan!');
       
           rl.close();

    // baca isi file
  });
});
});
});