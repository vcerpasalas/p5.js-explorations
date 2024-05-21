class Animal {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(20, 40);
        this.speed = random(1, 3);
        this.direction = random(TWO_PI);
    }

    move() {
        this.x += cos(this.direction) * this.speed;
        this.y += sin(this.direction) * this.speed;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
            this.direction = random(TWO_PI);
        }
    }

    display() {
        fill(150);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}