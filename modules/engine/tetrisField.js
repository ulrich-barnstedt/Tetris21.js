const BoxBasedPanel = require("./boxBasedPanel");
const TileGenerator = require("../tiles/generator");

module.exports = class extends BoxBasedPanel {
    constructor (terminal, extraInfo, nexTileFiled, scoreTracker) {
        super(terminal);
        this.extraInfo = extraInfo;
        this.nextTileField = nexTileFiled;
        this.scoreTracker = scoreTracker;

        this.tileGenerator = undefined;
        this.score = 0;
        this.tiles = [];
        this.activeTile = undefined;
        this.nextTile = undefined;
    }

    init (y, x, sy, sx) {
        super.init(y, x, sy, sx);
        this.tileGenerator = new TileGenerator(this.size.x);
    }

    renderActive () {
        this.terminal.draw.d2toBuffer(this.activeTile.y > 0 ? this.activeTile.y + this.pos.y : this.pos.y, this.activeTile.x + this.pos.x, this.activeTile.drawable());

        //TODO: fix clearing, but only if no blocks above
    }

    spawnNew () {
        if (this.nextTile === undefined) this.nextTile = this.tileGenerator.get();

        this.activeTile = this.nextTile;
        this.nextTile = this.tileGenerator.get();
        this.nextTileField.draw(this.nextTile);

        this.renderActive();
    }

    update () {
        this.activeTile.moveDown();
        this.renderActive();

        //TODO: add collision detection
    }

    passiveTick () {
        if (this.activeTile === undefined) this.spawnNew(); else this.update();
        this.terminal.render();
    }

    // --- input

    userRotate () {

    }

    userMove () {

    }

    userDrop () {

    }
}