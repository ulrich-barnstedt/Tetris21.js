const GameAreaBase = require("./gameAreaBase");

module.exports = class extends GameAreaBase {
    set (tile) {
        this.terminal.draw.d2toBuffer(this.pos.y + Math.floor((this.size.y - tile.height) / 2), this.pos.x + this.size.y - tile.width, tile.drawable());
    }
}