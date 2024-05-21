let corals = [];
let fishes = [];
let season;
let pollution;

function setup() {
    createCanvas(windowWidth, windowHeight);
    season = new Season();
    pollution = new Pollution();
    
    // Crear corales iniciales
    for (let i = 0; i < 30; i++) {
        corals.push(new Coral(random(width), random(height - 200, height)));
    }

    // Crear peces iniciales
    for (let i = 0; i < 20; i++) {
        fishes.push(new Fish(random(width), random(height)));
    }

    background(0, 100, 200); // Fondo azul del océano
}

function draw() {
    background(0, 100, 200);
    
    // Dibujar mar
    fill(0, 150, 255);
    rect(0, height - 200, width, 200);

    season.update();
    pollution.update(season);

    // Dibujar corales
    for (let coral of corals) {
        coral.grow(season);
        coral.display();
    }

    // Dibujar peces
    for (let fish of fishes) {
        fish.move();
        fish.display();
    }

    pollution.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}