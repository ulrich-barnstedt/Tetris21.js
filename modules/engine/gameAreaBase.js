module.exports = class {
    constructor (terminal) {
        this.terminal = terminal;
        this.size = undefined;
        this.pos = undefined;
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
        this.terminal.draw.box(this.pos.y - 1, this.pos.x - 1, this.pos.dy, this.pos.dx);
    }
}