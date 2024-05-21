class Pollution {
    constructor() {
        this.trash = [];
    }

    update(season) {
        if (season.currentSeason === 'Summer' && random(1) < 0.05) {
            this.trash.push(new Trash());
        }
    }

    display() {
        for (let piece of this.trash) {
            piece.move();
            piece.display();
        }
        this.trash = this.trash.filter(piece => piece.y < height);
    }
}

class Trash {
    constructor() {
        this.x = random(width);
        this.y = random(-50, 0);
        this.size = random(10, 30);
        this.speed = random(1, 2);
    }

    move() {
        this.y += this.speed;
    }

    display() {
        fill(255, 0, 0);
        noStroke();
        rect(this.x, this.y, this.size, this.size);
    }
}