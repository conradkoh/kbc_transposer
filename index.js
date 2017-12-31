'use strict'

function transposer() {
    var app = {}
    app.f1 = function () {
        console.log('123');
    }
    return app;
}

module.exports.f2 = function () {
    console.log('f2')
}