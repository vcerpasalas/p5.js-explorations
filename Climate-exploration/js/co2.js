class CO2 {
    constructor() {
        this.particles = [];
        this.spawnRate = 0.1;
    }

    display() {
        if (random(1) < this.spawnRate) {
            this.particles.push(new CO2Particle(random(width), height));
        }
        for (let p of this.particles) {
            p.update();
            p.display();
        }
        fill(0);
        textSize(20);
        text("Emisión de CO2", width - 150, 30);
    }
}

class CO2Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 15);
        this.alpha = 255;
    }

    update() {
        this.y -= 1;
        this.alpha -= 2;
    }

    display() {
        fill(50, this.alpha);
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}