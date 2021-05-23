const Tile = require("./tile");
const F = true;
const B = false;
const C = require("chalk");

const T = (layout, colorFn) => {
    return class extends Tile {
        constructor (x) {
            super(layout, colorFn, x);
        }
    }
}

module.exports = {
    I : T([[F, F, F, F]], C.hex("#00f0f0")),
    J : T([[F, B, B], [F, F, F]], C.hex("#0000f0")),
    L : T([[B, B, F], [F, F, F]], C.hex("#f0a000")),
    O : T([[F, F], [F, F]], C.hex("#f0f000")),
    S : T([[B, F, F], [F, F, B]], C.hex("#00f000")),
    T : T([[B, F, B], [F, F, F]], C.hex("#a000f0")),
    Z : T([[F, F, B], [B, F, F]], C.hex("#f00000"))
}