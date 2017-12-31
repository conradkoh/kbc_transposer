'use strict'

var Constants = require('./Constants');
/**
 * 
 * @param {string} line 
 * @param {char} suffix 
 */
function Block(line, suffix) {
    this.line = line
    this.suffix = suffix
}

/**
 * Transpose chords within a given block of text. Assumes that there are no special characters.
 * @param {*} offset 
 */
function Transpose(block, offset) {

    var output = block.line //Set the default text of a block to be the original content
    var invalid_char_index = -1;

    //Find invalid characters in the block
    for (var i = 0; i < Constants.INVALID_CHORD_CHARACTERS.length; i++) {
        invalid_char_index = block.line.indexOf(Constants.INVALID_CHORD_CHARACTERS[i])
        if (invalid_char_index !== -1) {
            break;
        }
    }

    if (invalid_char_index === -1) {
        output = "" //If no invalid character is found, reset the contents of the block to the empty string, and process the actual output
        let chords = block.line.split(" ");
        let chord_count = chords.length;
        for (var j = 0; j < chord_count; j++) {
            output += Block.TransposeChord(chords[j], offset)
            if (j < chord_count - 1) {
                output += " "
            }
        }
    }
    return new Block(output, block.suffix)
}

/**
 * Transpose a single chord
 * @param {string} chord 
 * @param {number} offset
 */
Block.TransposeChord = function TransposeChord(chord, offset) {
    var output = "";
    if (chord.length < 2) {
        output = Block.TransposeUnaugmentedChord(chord, offset);
    } else {
        let expected_sharp_flat = chord[1]; //We can do this because we have already determined that the chord has length above 2
        let augmentation_start_index = (expected_sharp_flat == Constants.CHARACTER_SHARP || expected_sharp_flat === Constants.CHARACTER_FLAT) ? 2 : 1; //If #/b found, set to 2. Else, 1
        var augmentations = "";

        if (augmentation_start_index < chord.length) {
            augmentations = chord.substr(augmentation_start_index, chord.length - augmentation_start_index);
        }

        let unaugmented_chord = chord.substr(0, augmentation_start_index);
        let new_unaugmented_chord = Block.TransposeUnaugmentedChord(unaugmented_chord, offset);
        output = new_unaugmented_chord + augmentations;
    }

    return output;
}

/**
 * Transposes a particular note by a given offset
 * @param {string} chord
 * @param {number} offset 
 */
Block.TransposeUnaugmentedChord = function TransposeUnaugmentedChord(chord, offset) {
    var chord_index = -1;
    var output = chord;
    if (chord !== "") {
        //If the chord isn't the empty string, begin transposing
        for (var i = 0; i < Constants.CHORD_COUNT; i++) {
            let current_chord = Constants.chords[i];
            let current_chord_alias = Constants.chords_alias[i];
            if (current_chord === chord || current_chord_alias === chord) {
                chord_index = (i + offset + Constants.CHORD_COUNT) % Constants.CHORD_COUNT; //Adding the chord count constant ensures that the negative offset is always wrapped around to a positive numbered index
            }
        }

        //Add the transposed chord to the output
        if (chord_index !== -1) {
            output = Constants.chords[chord_index];
        }
    }
    return output;
}

function ToString(block) {
    return block.line + block.suffix
}
Block.Transpose = Transpose
Block.ToString = ToString
module.exports = Block;