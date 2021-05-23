const util = require("./utility");
const boxChar = util.borderChars;

module.exports = class {
    constructor (terminal) {
        this.terminal = terminal;
        this.size = undefined;
        this.pos = undefined;

        this.tiles = [];
    }

    init (y, x, sy, sx) {
        //s - size, d - end

        sx = sx * 2;
        this.pos = {x, y, dx : x + sx, dy : y + sy};
        this.size = {
            x : sx,
            y : sy
        }

        this.borders();
    }

    borders () {
        this.terminal.buffer[this.pos.y - 1][this.pos.x - 1] = boxChar.topL;
        this.terminal.buffer[this.pos.dy][this.pos.x - 1] = boxChar.bottomL;
        this.terminal.buffer[this.pos.y - 1][this.pos.dx] = boxChar.topR;
        this.terminal.buffer[this.pos.dy][this.pos.dx] = boxChar.bottomR;

        this.terminal.writeIntoX(this.pos.y - 1, this.pos.x, boxChar.horizontal.repeat(this.size.x));
        this.terminal.writeIntoX(this.pos.dy, this.pos.x, boxChar.horizontal.repeat(this.size.x));

        this.terminal.writeIntoY(this.pos.y, this.pos.x - 1, boxChar.vertical.repeat(this.size.y));
        this.terminal.writeIntoY(this.pos.y, this.pos.dx, boxChar.vertical.repeat(this.size.y));
    }

    addTile (tile) {
        this.tiles.push(tile);
    }
}