// piping and compressing

const fs = require('fs');

const zlib = require('zlib')
let readable = fs.createReadStream(__dirname + '/./dummy.txt')

let gzip = zlib.createGzip()

let compressed = fs.createWriteStream(__dirname + '/../file_big.txt.gz')



readable.pipe(gzip).pipe(compressed)