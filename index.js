var TransposerLib = require('./lib/Transposer')
module.exports.Transpose = function (text) {
    return TransposerLib.TransposeLines(text);
}