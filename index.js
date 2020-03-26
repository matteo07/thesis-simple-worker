'use strict';

const fs = require('fs');

const file = process.argv[2];
const argument = process.argv[3];

const parsedData = parseFile(file);

const output = parsedData.reduce((a,b) => a + b, parseInt(argument))
console.log(output)

function parseFile(path) {
		const rawdata = fs.readFileSync(path);
		return JSON.parse(rawdata); 
}
