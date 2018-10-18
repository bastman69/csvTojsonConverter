const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

let csvFile = path.join(__dirname, 'customer-data.csv');
let jsonFile = path.join(__dirname, 'customer-data.json');

if (process.argv[2]) {
    csvFile = process.argv[2];
}
if (process.argv[3]) {
    jsonFile = process.argv[3];
}

const readStream = fs.createReadStream(csvFile);
const writeStream = fs.createWriteStream(jsonFile);

readStream
    .pipe(csvtojson())
    .pipe(writeStream);