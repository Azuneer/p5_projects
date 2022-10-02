// Perlin noise stuff
// Credits goes to The Coding Train

// var xoff1 = 0;
// var xoff2 = 10000;
var inc = 0.01;

function setup() {
	createCanvas(400, 400);
	pixelDensity(1);
	// put setup code here
}

function draw() {
	var yoff = 0;

	loadPixels();

	for(var x = 0; x < width; x++) {
		var xoff = 0;
		for(var y = 0; y < height; y++){
			var index = (x+y*width) * 4;
			var r = noise(xoff,yoff)*255;
			pixels[index+0] = r;
			pixels[index+1] = r;
			pixels[index+2] = r;
			pixels[index+3] = 255;

			xoff += inc;
		}
		yoff += inc
	}
	updatePixels();
	//noLoop();

	// var x = map(noise(xoff1), 0, 1, 0, width)
	// var y = map(noise(xoff2), 0, 1, 0, height)
	//
	// xoff1 += 0.01
	// xoff2 += 0.01

	// ellipse(x, y, 24, 24);
}
