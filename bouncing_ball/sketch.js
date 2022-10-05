let x = 300;
let y = 200;
let velX = 1;
let velY = 1;
let rayon = 64;

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	rectMode(CENTER);
	fill(10,0,200)
	circle(x,y,rayon);
	x += velX
	y += velY

	if(x  >= 600){
		velX -= 1
	}

	if(y >= 400){
		velY -= 1
	}

}
