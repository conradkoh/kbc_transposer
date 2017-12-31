'use strict'
var Constants = require('./Constants');
var Block = require('./Block');

/**
 * Transposes chords within a given text by a specific offset
 * @param {string} lines 
 * @param {number} offset 
 */
function TransposeLines(lines, offset = 1) {
    let blocks = GenerateBlocks(lines);
    let newBlocks = TransposeBlocks(blocks, offset);
    return CombineBlocks(newBlocks);
}

/**
 * 
 * @param {string} lines 
 */
function GenerateBlocks(lines) {
    var blocks = [];
    var start_index = 0;
    //Check the string for each item that needs
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < Constants.BLOCK_DELIMITERS.length; j++) {
            if (lines[i] == Constants.BLOCK_DELIMITERS[j]) {
                let block_content = lines.substr(start_index, i - start_index)
                start_index = i + 1; //move the new start index counter by 1
                let block = new Block(block_content, lines[i]); // lines[i] contains the suffix
                blocks.push(block);
            }
        }
    }

    //Append the final block
    let last_block = new Block(lines.substr(start_index, lines.length - start_index), "")
    blocks.push(last_block)
    return blocks;
}
/**
 * 
 * @param {Block} blocks 
 * @param {number} offset 
 */
function TransposeBlocks(blocks, offset) {
    var new_blocks = []
    for (var idx in blocks) {
        new_blocks.push(Block.Transpose(blocks[idx], offset));
    }
    return new_blocks;
}

/**
 * 
 * @param {*} blocks 
 */
function CombineBlocks(blocks) {
    var output = ""
    for (var idx in blocks) {
        output += Block.ToString(blocks[idx])
    }
    return output;
}

function GetDelimiterIndex(input) {
    //Check the string for each item that needs
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < Constants.BLOCK_DELIMITERS.length; j++) {
            if (input[i] == Constants.BLOCK_DELIMITERS[j]) {
                return i; //Return the index of the character if found
            }
        }
    }

    return -1; //Return -1 if the there are no delimiters found
}
module.exports.TransposeLines = TransposeLines
module.exports.GenerateBlocks = GenerateBlocks
module.exports.TransposeBlocks = TransposeBlocks
module.exports.CombineBlocks = CombineBlocks