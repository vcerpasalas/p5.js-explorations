let shapes = [];
let letters = [];
let numShapes = 30;
let numLetters = 20;
let colorPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorPalette = new ColorPalette();
    
    for (let i = 0; i < numShapes; i++) {
        shapes.push(new Shape(random(width), random(height), random(20, 100)));
    }

    for (let i = 0; i < numLetters; i++) {
        letters.push(new Letter(random(width), random(height), char(random(65, 90))));
    }

    noLoop();  // Evita que draw se llame en bucle, llamaremos redraw manualmente
}

function draw() {
    background(0);

    for (let shape of shapes) {
        shape.display();
    }

    for (let letter of letters) {
        letter.display();
    }
}

function mousePressed() {
    shapes.push(new Shape(mouseX, mouseY, random(20, 100)));
    letters.push(new Letter(mouseX, mouseY, char(random(65, 90))));
    redraw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}