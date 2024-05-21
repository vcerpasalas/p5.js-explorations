class SeaLevel {
    constructor() {
        this.level = 100;
        this.speed = 0.05;
    }

    display() {
        fill(0, 0, 255, 100);
        noStroke();
        this.level += this.speed;
        if (this.level > height) {
            this.level = 100;
        }
        rect(0, height - this.level, width, this.level);
        fill(0);
        textSize(20);
        text("Nivel del Mar", 10, height - this.level - 10);
    }
}