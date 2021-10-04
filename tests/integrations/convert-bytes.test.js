const assert = require('assert');
const {convertBytes} = require('../fixtures/functions.js');

describe('convertBytes', () => {
    it('convertBytes(0) should return 0', () => {
        assert.equal(convertBytes(0), '0');
    });

    it('convertBytes(1024) should return 11KB', () => {
        assert.equal(convertBytes(1024), '1KB');
    });

    it('convertBytes(1024 * 1024) should return 1MB', () => {
        assert.equal(convertBytes(1024 * 1024), '1MB');
    });

    it('convertBytes(1024 * 1024 * 1024) should return 1GB', () => {
        assert.equal(convertBytes(1024 * 1024 * 1024), '1GB');
    });

    it('convertBytes(1024 * 1024 * 1024 * 1024) should return 1TB', () => {
        assert.equal(convertBytes(1024 * 1024 * 1024 * 1024), '1TB');
    });

    it('convertBytes(1024 * 1024 * 1024 * 1024 * 1024) should return 1PB', () => {
        assert.equal(convertBytes(1024 * 1024 * 1024 * 1024 * 1024), '1PB');
    });

    it('convertBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024) should return 1EB', () => {
        assert.equal(convertBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024), '1EB');
    });

    it('convertBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) should return 1ZB', () => {
        assert.equal(
            convertBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024),
            '1ZB'
        );
    });
});
