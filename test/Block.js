var assert = require('assert')
var Block = require('./../lib/Block')
describe('Block', function () {
    describe('TransposeUnaugmentedChord', function () {
        it('Unaugmented chord transpose', function () {
            assert.equal(Block.TransposeUnaugmentedChord("G", 1), "G#");
        })
    })

    describe('TransposeChord', function () {
        it('Augmented chord transpose', function () {
            assert.equal(Block.TransposeChord("Gsus", 1), "G#sus");
        })
        it('Augmented chord transpose', function () {
            assert.equal(Block.TransposeChord("G", 1), "G#");
        })
    })

    describe('Transpose', function () {
        it('Overall Block transpose', function () {
            let blk = new Block("G D Em C", ")");
            let newBlk = Block.Transpose(blk, 1);
            assert.equal(newBlk.line, "G# Eb Fm C#");
        })
    })
})