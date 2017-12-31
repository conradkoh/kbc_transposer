var assert = require('assert')
var Transposer = require('./../lib/Transposer')
describe('Transposer', function () {
    it('Single', function () {
        var input = "B"
        var expected = "C"
        var actual = Transposer.TransposeLines(input, 1);
        assert.equal(actual, expected);
    })
    it('Sub Section', function () {
        var input = "G   D   Em   C"
        var expected = "A   E   F#m   D"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('New Lines', function () {
        var input = "G   D   Em   C\nA   E   F#m   D"
        var expected = "A   E   F#m   D\nB   F#   G#m   E"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Slash Chords', function () {
        var input = "G/A   D/E   Em/F#m   C/D\nA/G   E/D   F#m/Em   D/C"
        var expected = "A/B   E/F#   F#m/G#m   D/E\nB/A   F#/E   G#m/F#m   E/D"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Special Characters', function () {
        var input = "(G/A   D/E   Em/F#m   C/D\nA/G   {E/D}   [F#m/Em]   (D/C))"
        var expected = "(A/B   E/F#   F#m/G#m   D/E\nB/A   {F#/E}   [G#m/F#m]   (E/D))"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Brackets', function () {
        var input = "(G   D   Em   C\nA   E   F#m   D)"
        var expected = "(A   E   F#m   D\nB   F#   G#m   E)"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Slashes', function () {
        var input = "This is a lyric line (G   D   Em   C/////hello)"
        var expected = "This is a lyric line (A   E   F#m   D/////hello)"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Words with bracketed chords', function () {
        var input = "Bless the Lord (G   D   Em   C\nA   E   F#m   D)"
        var expected = "Bless the Lord (A   E   F#m   D\nB   F#   G#m   E)"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })

    it('Invalid', function () {
        var input = "Ending:"
        var expected = "Ending:"
        var actual = Transposer.TransposeLines(input, 2);
        assert.equal(actual, expected);
    })
})