const BoxBasedPanel = require("./boxBasedPanel");

module.exports = class extends BoxBasedPanel {
    init (y, x, sy, sx) {
        super.init(y, x, sy, sx);

        this.terminal.draw.textIntoX(this.pos.y, this.pos.x + 1, "0".repeat(this.size.x - 2));
    }

    setScore (value) {
        value = String(value);
        this.terminal.draw.textIntoX(this.pos.y, this.pos.x + this.size.x - value.length - 1, value);
    }
}