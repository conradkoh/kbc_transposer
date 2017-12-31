var TransposerLib = require('./lib/Transposer')
module.exports.Transpose = function (text, offset = 1) {
    return TransposerLib.TransposeLines(text, offset);
}