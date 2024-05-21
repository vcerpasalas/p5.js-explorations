class ColorPalette {
    constructor() {
        this.colors = [];
        this.generatePalette();
    }

    generatePalette() {
        for (let i = 0; i < 360; i += 15) {
            this.colors.push(color(`hsl(${i}, 100%, 50%)`));
        }
    }

    getColor() {
        return random(this.colors);
    }
}