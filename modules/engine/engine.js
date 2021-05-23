const Terminal = require("../terminal/terminal");
const Input = require("../input");
const TetrisField = require("./tetrisField");
const NextTile = require("./nextTile");
const tiles = require("../tiles/tiles");

module.exports = class {
    constructor () {
        this.terminal = new Terminal();
        this.input = new Input();
        this.tetrisField = new TetrisField(this.terminal);
        this.nextTileField = new NextTile(this.terminal);
    }

    init () {
        this.terminal.draw.textIntoX(1, 1, "T e t r i s 2 1 . j s");
        this.terminal.draw.textIntoY(3, 34, "Next");

        this.input.init();
        this.tetrisField.init(3, 2, 20, 10);
        this.nextTileField.init(3, 24, 4, 4);

        this.terminal.render();
    }

    setNextTile (tile) {
        this.nextTileField.set(tile);
    }
}
