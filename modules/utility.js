module.exports = class {
    static random (min, max) {
        return Math.floor(Math.random() * ((max + 1) - min) + min);
    }

    static box = "█";
    static blank = " ";
    static borderChars = {
        topL : "╔",
        bottomL : "╚",
        topR : "╗",
        bottomR : "╝",
        vertical : "║",
        horizontal : "═"
    }

    static rotate (array, amount) {
        let out = [];
        let w = array.length;
        let h = array[0].length;
        let r = amount + Math.ceil(Math.abs(amount) / 4) * 4;
        let a = r % 2;
        let b = Math.floor((r / 2) % 2);
        let c = Math.floor((++r / 2) % 2);
        let p = 2 * !b - 1;
        let q = 2 * !c - 1;

        for (let i = 0; i < w * !a + h * a; i++) {
            out[i] = [];
        }
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                let x = i * !a * q + j *  a * q + h * (c &&  a) + w * (c && !a) - c;
                let y = i *  a * p + j * !a * p + h * (b && !a) + w * (b &&  a) - b;
                out[x][y] = array[i][j];
            }
        }

        return out;
    };
}