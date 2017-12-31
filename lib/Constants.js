module.exports = {
    BLOCK_DELIMITERS: "()[]{}\r\n<>:!$%^&*-_+=|\\/;\"\'~`",
    INVALID_CHORD_CHARACTERS: "cefhklnopqrtvwxyzHKLOPQRTVWXYZIJMNSU:!$%^&*_",
    chords: ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "Bb", "B"],
    chords_alias: ["C", "Db", "D", "D#", "E", "F", "Gb", "G", "Ab", "A", "A#", "B"],
    chords_flats: ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"],
    chords_sharps: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
    CHARACTER_SHARP: "#",
    CHARACTER_FLAT: "b",
    CHORD_COUNT: 12,
    valid_augmentations: ["sus", "dim", "aug", "maj", "add", "1", "2", "5", "7", "9"]
}