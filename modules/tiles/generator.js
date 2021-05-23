const util = require("../utility");
const tiles = Object.entries(require("./tiles"));

module.exports = class {
    constructor (max) {
        this.max = max;
    }

    get () {
        let idx = util.random(0, tiles.length - 1);
        return new tiles[idx][1](this.max);
    }
}

