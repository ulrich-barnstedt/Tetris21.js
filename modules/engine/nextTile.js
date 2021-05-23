const BoxBasedPanel = require("./boxBasedPanel");

module.exports = class extends BoxBasedPanel {
    draw (tile) {
        this.terminal.draw.d2toBuffer(this.pos.y + Math.floor((this.size.y - tile.height) / 2), this.pos.x + (this.size.x / 2) - tile.width, tile.drawable());
    }
}