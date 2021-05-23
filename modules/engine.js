const Terminal = require("./terminal");
const Input = require("./input");
const GameArea = require("./gameArea");
const utility = require("./utility");

const tiles = require("./tiles");

module.exports = class {
    constructor () {
        this.terminal = new Terminal();
        this.input = new Input();
        this.gameArea = new GameArea(this.terminal);
    }

    init () {
        this.terminal.writeIntoX(1, 1, "T e t r i s 2 1 . j s");

        this.input.init();
        this.gameArea.init(3, 2, 20, 10);

        this.terminal.render();
    }
}
