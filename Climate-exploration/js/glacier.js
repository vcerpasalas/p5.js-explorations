class Glacier {
    constructor() {
        this.size = 300;
        this.meltSpeed = 0.1;
    }

    display() {
        fill(200);
        noStroke();
        this.size -= this.meltSpeed;
        if (this.size < 0) {
            this.size = 300;
        }
        rect(width / 2 - this.size / 2, height - 50, this.size, 50);
        fill(0);
        textSize(20);
        text("Desglaciación", width / 2 - 50, height - 60);
    }
}