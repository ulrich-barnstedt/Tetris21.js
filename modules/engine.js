const Terminal = require("buffer-render");
const Input = require("readline-char");
const TetrisField = require("./engine/tetrisField");
const NextTile = require("./engine/nextTile");
const ExtraInfo = require("./engine/extraInfo");
const ScoreTracker = require("./engine/scoreTracker");
const tiles = require("./tiles/tiles");

module.exports = class {
    constructor () {
        this.terminal = new Terminal();
        this.input = new Input();
        this.nextTileField = new NextTile(this.terminal);
        this.extraInfo = new ExtraInfo(this.terminal, this.input);
        this.scoreTracker = new ScoreTracker(this.terminal);
        this.tetrisField = new TetrisField(this.terminal, this.extraInfo, this.nextTileField, this.scoreTracker);
    }

    init () {
        this.terminal.draw.textIntoX(1, 8, "T e t r i s 2 1 . j s");
        this.input.init();

        this.tetrisField.init(3, 2, 20, 10);
        this.nextTileField.init(3, 25, 4, 5);
        this.scoreTracker.init(9, 25, 1, 5);
        this.extraInfo.init(12, 25, 11, 5);

        this.terminal.render();
        this.setupPassiveTicks();
    }

    setupPassiveTicks () {
        //TODO: gradually increase speed with varying ms in setTimeout()

        setInterval(() => {
            this.tetrisField.passiveTick();
        }, 200);
    }

    setupKeyboardInput () {
        //todo: setup
    }
}


//this.terminal.draw.textIntoY(3, 34, "Next");