const util = require("../utility");

module.exports = class {
    constructor (layout, colorFn, maxX) {
        this.layout = layout;
        this.colorFn = colorFn;

        this.width = this.layout[0].length;
        this.height = this.layout.length;

        this.y = 0;
        this.x = util.random(0, maxX - this.width * 2);
    }

    rotate (clockwise) {
        this.layout = util.rotate(this.layout, 1);

        this.width = this.layout[0].length;
        this.height = this.layout.length;
    }

    moveDown () {
        this.y++;
    }

    strip () {
        this.layout.pop();
    }

    removable () {
        return this.layout.length === 0;
    }

    drawable () {
        let array = Array(this.layout.length).fill(undefined).map(() => []);

        for (let y = 0; y < this.layout.length; y++) {
            for (let x = 0; x < this.layout[y].length; x += 0.5) {
                array[y][x * 2] = this.layout[y][Math.floor(x)] ? this.colorFn(util.box) : util.blank;
            }
        }

        if (this.y < 0) return array.slice(this.y + 1);
        return array;
    }

    setupIntoGame () {
        this.y = 0 - this.height;
    }
}