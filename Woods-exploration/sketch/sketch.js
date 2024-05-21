let trees = [];
let flowers = [];
let animals = [];
let season;
let weather;

function setup() {
    createCanvas(windowWidth, windowHeight);
    season = new Season();
    weather = new Weather();

    // Crear árboles iniciales
    for (let i = 0; i < 20; i++) {
        trees.push(new Tree(random(width), random(height - 100, height)));
    }

    // Crear flores iniciales
    for (let i = 0; i < 50; i++) {
        flowers.push(new Flower(random(width), random(height - 50, height)));
    }

    // Crear animales iniciales
    for (let i = 0; i < 10; i++) {
        animals.push(new Animal(random(width), random(height - 100, height)));
    }
    background(255);
}

function draw() {
    background(135, 206, 235); // Cielo azul claro

    // Dibujar césped
    fill(34, 139, 34);
    rect(0, height - 100, width, 100);

    season.update();
    weather.update(season);

    // Dibujar árboles
    for (let tree of trees) {
        tree.grow(season);
        tree.display();
    }

    // Dibujar flores
    for (let flower of flowers) {
        flower.grow(season);
        flower.display();
    }

    // Dibujar animales
    for (let animal of animals) {
        animal.move();
        animal.display();
    }

    weather.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}