const fs = require('fs');
const lineByLine = require('n-readlines');

// could also use the library 
// let isValidIp = require('is-ip');
// isValidIp('192.168.0.1');
const isValidIP = (str) => {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
    const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
    return regex.test(str);
};


// alternatives are array.sort()
// quick sort is chosen here for better average time complexity O(nlogn)
const quickSort = (origArray)=>{
	if (origArray.length <= 1) { 
		return origArray;
	} else {
		const left = [];
		const right = [];
		const newArray = [];
		const pivot = origArray.pop();
		const length = origArray.length;

		for (let i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}
		return newArray.concat(quickSort(left), pivot, quickSort(right));
	}
};

const mergeAndSort= (file) =>{
	if(fs.existsSync(file)){
		const liner = new lineByLine(file);
		let line;
		while (line = liner.next()){
			const line_arr = line.toString().split(":");
			if (line_arr.length >0){
				const line_ip = line_arr[0].trim();
				// TODO: add ip validation logic here
				const line_digits = line.toString().split(":")[1].trim().split(",");
				// TODO: add digits validation logic here
				if (result.get(line_ip) !== undefined){	 
					result.set(line_ip , quickSort(Array.from(new Set(result.get(line_ip).concat(line_digits)))));
				}else{
					result.set(line_ip, quickSort(Array.from(new Set(line_digits))));
				}
			}
		}
	}else{
		console.log(`file ${file} does not exist`);
	}
};

const result = new Map();

const files = process.argv.slice(2);
files.forEach(
	mergeAndSort
);

result.forEach((value, key) =>{
	console.log(`${key}: ${value}`);
});