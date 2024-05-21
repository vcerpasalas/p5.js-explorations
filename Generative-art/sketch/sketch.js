let shapes = [];
let numShapes = 50;
let colorPalette;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorPalette = new ColorPalette();
    
    for (let i = 0; i < numShapes; i++) {
        shapes.push(new Shape(random(width), random(height), random(20, 100)));
    }

    noLoop();  // Evita que draw se llame en bucle, llamaremos redraw manualmente
}

function draw() {
    background(0);

    for (let shape of shapes) {
        shape.display();
    }
}

function mousePressed() {
    shapes.push(new Shape(mouseX, mouseY, random(20, 100)));
    redraw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}