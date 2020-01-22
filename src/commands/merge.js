// this library is used for better CLI user experience
const stdio = require('stdio');
const readline = require('readline');


const opts = stdio.getopt({
    "file1": {description: "first file location", mandatory: true, args:1 },
    "file2": {description: "first file location", mandatory: true, args:1 }
});


// could also use the library 
// let isValidIp = require('is-ip');
// isValidIp('192.168.0.1');
function isValidIP(str) {
    const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
    const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
    return regex.test(str);
  }

// alternatives are array.sort()
// quick sort is chosen here for better average time complexity O(nlogn)
function quick_Sort(origArray) {
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
		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}

console.log(process.argv);