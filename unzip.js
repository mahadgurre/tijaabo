const fs=require('fs');

var zlib= require('zlib');

fs.createReadStream('file.txt.gz').pipe(zlib.createUnzip()).pipe(fs.createWriteStream('file.txt'));

console.log("file is decompressed")