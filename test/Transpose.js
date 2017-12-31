var assert = require('assert')
var Transposer = require('./../lib/Transposer')
describe('Transposer', function () {
    it('New Lines', function () {
        var input = "G   D   Em   C\nA   E   F#m   D"
        var expected = "A   E   F#m   D\nB   F#   G#m   E"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Brackets', function () {
        var input = "(G   D   Em   C\nA   E   F#m   D)"
        var expected = "(A   E   F#m   D\nB   F#   G#m   E)"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Words with bracketed chords', function () {
        var input = "Bless the Lord (G   D   Em   C\nA   E   F#m   D)"
        var expected = "Bless the Lord (A   E   F#m   D\nB   F#   G#m   E)"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })
})