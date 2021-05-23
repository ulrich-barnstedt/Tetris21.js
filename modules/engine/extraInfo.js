const BoxBasedPanel = require("./boxBasedPanel");
const Chalk = require("chalk");

module.exports = class extends BoxBasedPanel {
    constructor (terminal, input) {
        super(terminal);
        this.input = input;
    }


    init (y, x, sy, sx) {
        super.init(y, x, sy, sx);

        this.terminal.draw.textIntoX(this.pos.y + this.size.y - 1, this.pos.x + this.size.x - 7, "© U.B.");
        //this.terminal.draw.textIntoX(this.pos.y, this.pos.x + 1, "Welcome!");
    }

    loose () {
        this.terminal.draw.textIntoX(this.pos.y + 1, this.pos.x + 1, "You");
        this.terminal.draw.textIntoX(this.pos.y + 2, this.pos.x + 1, Chalk.hex("#f00000")("LOST."));

        this.input.block();
    }
}