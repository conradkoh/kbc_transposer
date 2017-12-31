var assert = require('assert')
var Transposer = require('./lib/Transposer')

var input = "Bless the Lord (G   D   Em   C\nA   E   F#m   D)"
var expected = "Bless the Lord (A   E   F#m   D\nB   F#   G#m   E)"
var actual = Transposer.TransposeLines(input, 2);
var x = 1;