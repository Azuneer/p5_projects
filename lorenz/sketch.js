let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0/3.0;
function setup() {
	createCanvas(800,600);
	// put setup code here
    background(0);
}

function draw() {
	// put drawing code here
	let dt = 0.001;
	let dx = (a * (y - x)) * dt;
	let dy = x * (b - z) -y * dt;
	let dz = x * y - c * z * dt;
	x += dx;
	y += dy;
	z += dz;
	console.log(x);
}
