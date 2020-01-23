/* eslint-disable no-undef */
const fs = require('fs');
const lineByLine = require('n-readlines');

/**
 * Validates ip addresses
 * quick sort is chosen here for better average time complexity O(nlogn)
 * alternative is 'is-ip' library
 * @param {Array} inputArray Arguments to the command
 */
// eslint-disable-next-line no-unused-vars
const isValidIP = str => {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
    const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
    return regex.test(str);
};

/**
 * Sorts an array of integers using quick sort
 * quick sort is chosen here for better average time complexity O(nlogn)
 * alternative is array.sort()
 * @param {Array} inputArray Arguments to the command
 */
const quickSort = inputArray => {
    if (inputArray.length <= 1) {
        return inputArray;
    } else {
        const left = [];
        const right = [];
        const newArray = [];
        const pivot = inputArray.pop();
        const length = inputArray.length;

        for (let i = 0; i < length; i++) {
            if (inputArray[i] <= pivot) {
                left.push(inputArray[i]);
            } else {
                right.push(inputArray[i]);
            }
        }
        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
};

// placeholder for final result
// eslint-disable-next-line no-undef
const result = new Map();

/**
 * Merges existing result map with new file input
 * groups by ip addresses
 * sorts the gathered integeters in ascending order
 * @param {String} file Arguments to the command
 */
const mergeAndSort= (file) =>{
	if(fs.existsSync(file)){
		const liner = new lineByLine(file);
		let line;
		// eslint-disable-next-line no-cond-assign
		while (line = liner.next()){
			const line_arr = line.toString().split(":");
			if (line_arr.length >0){
				const line_ip = line_arr[0].trim();
				// TODO: add ip validation logic here
				const line_digits = line.toString().split(":")[1].trim().split(",");
				// TODO: add digits validation logic here
				if (result.get(line_ip) !== undefined){	 
					// eslint-disable-next-line no-undef
					result.set(line_ip , quickSort(Array.from(new Set(result.get(line_ip).concat(line_digits)))));
				}else{
					// eslint-disable-next-line no-undef
					result.set(line_ip, quickSort(Array.from(new Set(line_digits))));
				}
			}
		}
	}else{
		console.log(`file ${file} does not exist`);
	}
};

const files = process.argv.slice(2);
files.forEach(mergeAndSort);

result.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
