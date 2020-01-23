/* eslint-disable no-undef */
const expect = require('chai').expect;
const cmd = require('../utils/cmd');

describe('ip-data-extractor commands merge ', () => {

    it('should print correct input', async () => {
        const path = './dist/commands/merge.js';
        const file1 = './test/resources/t1_f1.txt';
        const file2 = './test/resources/t1_f2.txt';
        const response = await cmd.execute(
            `node ${path} ${file1} ${file2}`
        );
        expect(response).to.equal(
`1.2.3.4: 1,3,4,5,6
1.2.3.5: 6,7,8,9
1.2.3.6: 1
`
        );
    });

    it('should print file1 does not exist', async () => {
        const path = './dist/commands/merge.js';
        const file1 = './test/resources/t1_f1.txt1';
        const file2 = './test/resources/t1_f2.txt';
        const response = await cmd.execute(
            `node ${path} ${file1} ${file2}`
        );
        expect(response).to.equal(
`file ./test/resources/t1_f1.txt1 does not exist
`
        );
    });

    it('should print first file does not exist', async () => {
        const path = './dist/commands/merge.js';
        const file1 = './test/resources/t1_f1.txt1';
        const file2 = './test/resources/t1_f2.txt1';
        const response = await cmd.execute(
            `node ${path} ${file1} ${file2}`
        );
        expect(response).to.equal(
`file ./test/resources/t1_f1.txt1 does not exist
`
        );
    });

    it('should print invalid data', async () => {
        const path = './dist/commands/merge.js';
        const file1 = './test/resources/t1_f1.txt';
        const file2 = './test/resources/t1_f3.txt';
        const response = await cmd.execute(
            `node ${path} ${file1} ${file2}`
        );
        expect(response).to.equal(
`file ./test/resources/t1_f3.txt have invalid data. Please provide an array of integers
`
        );
    });

});
