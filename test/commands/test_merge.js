/* eslint-disable no-undef */
const expect = require('chai').expect;
const cmd = require('../utils/cmd');

describe('ip-data-extractor commands merge', () => {
    it('should print correct input', async () => {
        const response = await cmd.execute(
            // 'ls'
            'node ./dist/commands/merge.js ./test/resources/t1_f1.txt ./test/resources/t1_f2.txt'
        );
        expect(response).to.equal(
`1.2.3.4: 1,3,4,5,6
1.2.3.5: 6,7,8,9
1.2.3.6: 1
`
        );
    });

});
