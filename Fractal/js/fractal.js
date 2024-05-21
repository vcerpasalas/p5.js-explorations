class Fractal {
    constructor(params, colorPalette) {
        this.params = params;
        this.colorPalette = colorPalette;
    }

    update() {
        this.params.angle += 0.1;
        this.params.length *= 0.99;
    }

    display() {
        push();
        translate(width / 2, height);
        this.drawFractal(this.params.length, this.params.level);
        pop();
    }

    drawFractal(length, level) {
        if (level === 0) return;
        stroke(this.colorPalette.getColor(level));
        line(0, 0, 0, -length);
        translate(0, -length);
        push();
        rotate(this.params.angle);
        this.drawFractal(length * 0.67, level - 1);
        pop();
        push();
        rotate(-this.params.angle);
        this.drawFractal(length * 0.67, level - 1);
        pop();
    }
}