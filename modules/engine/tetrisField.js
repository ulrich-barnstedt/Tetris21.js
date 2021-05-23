const BoxBasedPanel = require("./boxBasedPanel");

module.exports = class extends BoxBasedPanel {
    constructor (terminal, extraInfo) {
        super(terminal);
        this.extraInfo = extraInfo;

        this.tiles = [];
        this.activeTile = undefined;
    }

    render (tiles) {
        //todo: render tiles, with clipping off screen
    }

    spawnNew () {

    }

    update () {

    }

    passiveTick () {
        if (this.activeTile === undefined) return this.spawnNew();
        this.update();
    }

    // --- input

    userRotate () {

    }

    userMove () {

    }

    userDrop () {

    }
}