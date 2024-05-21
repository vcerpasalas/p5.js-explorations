let fractal;
let colorPalette;
let params;

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorPalette = new ColorPalette();
    params = new Parameters();
    fractal = new Fractal(params, colorPalette);
    createGUI(params);
    noLoop();
}

function draw() {
    background(0);
    fractal.display();
}

function mousePressed() {
    fractal.update();
    redraw();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}