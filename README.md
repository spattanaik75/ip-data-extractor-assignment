**PROBLEM STATEMENT**

Write a program to solve the following problem:

Your program must accept two filenames as command-line parameters. These files will contain 7-bit ASCII text, and each line may consist of an IP address, followed by a colon, followed by a comma-separated list of numbers. The two files should be joined on IP address and the numbers from each file should be appended and returned, sorted and without duplicates. The results should be written to stdout as the IP address followed by a colon, followed by a comma separated list of the numbers.

For example, file1:

1.2.3.4: 1,3,4
1.2.3.5: 9,8,7,6

And file2:

1.2.3.4: 4,5,6
1.2.3.6: 1,1,1

Your program should print:

1.2.3.4: 1,3,4,5,6
1.2.3.5: 6,7,8,9
1.2.3.6: 1

Your program should handle errors, including malformed input, appropriately and should be of a sufficient quality that it can run on a production Linux system.

Please provide the source code, automated tests, any additional data (e.g. build scripts) or information (e.g. assumptions you've made, known bugs, etc) that you think we would need to fairly judge your submission.


**PRE-REQUISITES:**  
- NODEJS  
- NPM   
- VSCODE  
- MOCHA SIDEBAR EXTENSION (optional)   

**DEV SETUP**
`install`
> yarn install

`test`
> yarn test

**USAGE**:  

`add as a dependency`
> yarn add https://github.com/spattanaik75/ip-data-extractor-assignment.git

`cli usage`
>  node .\node_modules\ip-data-extractor-cli\dist\commands\merge.js {$path_to_file1} {$path_to_file2}  

`use existing testfiles`
> node .\node_modules\ip-data-extractor-cli\dist\commands\merge.js .\node_modules\ip-data-extractor-cli\test\resources\t1_f1.txt .\node_modules\ip-data-extractor-cli\test\resources\t1_f2.txt


**TODO**
- add IP address validation logic