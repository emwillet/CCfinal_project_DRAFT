class Particle {
	constructor (x, y){
	this.pos = new p5.Vector(x, y);
	this.age = maxAge;
	this.offsetVariance = random(0.5, 3);
	this.sizeVariance = random(1, 2);
	}
}

class Particle2 {
	constructor (x, y){
	this.pos2 = new p5.Vector(x, y);
	this.age = maxAge;
	this.offsetVariance = random(0.5, 3);
	this.sizeVariance = random(1, 2);
	}
}