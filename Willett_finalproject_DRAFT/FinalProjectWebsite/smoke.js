var particles = [];
var particles2 = [];
var maxAge = 80;
var pos;
var pos2;
var hue1;
var hue2;

let istext;

let iSprites = [];
let cycleSprites = 12;
let currentSprite = 0;

let cycleFPS = 20;
let lastFrameTime;

function preload(){
	// for (let i=0; i <cycleSprites; i++){
	// 	iSprites[i] = loadImage(String(i) + ".png");
	// }
	istext = loadImage("media/innovateblack-01.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 255);
	pos = new p5.Vector(width/2, height/2);
	pos2 = new p5.Vector(width/3, height/3);
	lastFrameTime = millis();
}

function draw() {
	blendMode(BLEND);
	background(0);
	blendMode(SCREEN);
	hue1 = random (0,255);
	hue2 = random (100, 200);
	
	let vector = new p5.Vector(pos.x, pos.y);
	let vector2 = new p5.Vector(pos2.x, pos2.y);
	
	pos = p5.Vector.lerp(pos, new p5.Vector(mouseX,mouseY), 0.25);
	vector.sub(pos.x, pos.y);
	pos2 = p5.Vector.lerp(pos2, new p5.Vector((mouseX),(mouseY)), 0.25);
	vector.sub(pos2.x, pos2.y);
	
	if (vector.mag() > 1) {
		particles.push(new Particle(pos.x, pos.y));}
	if (vector.mag() > 1) {
		particles2.push(new Particle2(pos2.x, pos2.y));}

	for (let i = particles.length -1; i > -1; i--) {
		if (i == particles.length - 1) {
			continue;}
	
		let opacity = map(particles[i].age, 0, maxAge, 0, 175);  // From opaque to transparent.
		let offset = (1 - (particles[i].age / float(maxAge))) * 50  * particles[i].offsetVariance;  // Have it rise the longer it's alive.
		
		strokeWeight(map(particles[i].age, 0, maxAge, 160, 10) * particles[i].sizeVariance);  // From small to bigger size.
		drawingContext.shadowColor = color(hue1, hue1, hue1, opacity);
		drawingContext.shadowBlur = map(particles[i].age, 0, maxAge, 60 * particles[i].sizeVariance, 1);  // From small to large blur.
		
		line(
			particles[i].pos.x, particles[i].pos.y - offset, 
			particles[i + 1].pos.x, particles[i + 1].pos.y - offset);
		
		particles[i].age -= 0.5;
		particles[i].pos.y -= 2;
		
		if (particles[i].age <= 0) {
			particles.splice(i, 1);
		}
	}
	
	push();
	translate(60, 100); 
	for (let i = particles2.length -1; i > -1; i--) {
		if (i == particles2.length - 1) {
			continue;}
			let opacity2 = map(particles2[i].age, 0, maxAge, 0, 175);  // From opaque to transparent.
			let offset2 = (1 - (particles2[i].age / float(maxAge))) * 50  * particles2[i].offsetVariance;  // Have it rise the longer it's alive.

			strokeWeight(map(particles2[i].age, 0, maxAge, 160, 10) * particles[i].sizeVariance);  // From small to bigger size.
			drawingContext.shadowColor = color(hue2, hue1, hue2, opacity2);
			drawingContext.shadowBlur = map(particles2[i].age, 0, maxAge, 60 * particles[i].sizeVariance, 1);  // From small to large blur.
		
		line(
			particles2[i].pos2.x, particles2[i].pos2.y - offset2, 
			particles2[i + 1].pos2.x, particles2[i + 1].pos2.y - offset2);
		
		particles2[i].age -= 0.5;
		particles2[i].pos2.y -= 10;
		
		if (particles2[i].age <= 0) {
			particles2.splice(i, 1);
		}
	}
	pop();
	
	
// 	push();
// 	blendMode(BLEND);
// 		if (millis() - lastFrameTime > 1000 / cycleFPS){  												
// 			currentSprite++; 
// 		  if (currentSprite > cycleSprites-1) currentSprite = 0;
// 			lastFrameTime = millis();
// 	}
	
	
// 	imageMode(CENTER);
// 	image(iSprites[currentSprite],width/2,height/2,iSprites[currentSprite].width/2, iSprites[currentSprite].height/2); 	
// 	pop();
	
	push();
	blendMode(BLEND);
	imageMode(CENTER);
	 for (i=-1000; i<2000; i = i+100){
		 image(istext, istext.width/2, istext.height/3 + i, istext.width/2, istext.height/2);
	 }

	// image(istext, istext.width/2, istext.height/6, istext.width/2, istext.height/2);
	pop();
}


