let colors = [
	[167, 235, 212,100],
	[105, 201, 224,100],
	[252, 58, 103,100],
	[171,166,144,100],
	[252, 197, 58,100],
	[245, 190, 176,100],
];

let bubbles = [];

let isSprites = [];
let cycleSprites = 20;
let currentSprite = 0;
let cycleFPS = 5;
let lastFrameTime;

function preload(){
	
	for (let i=0; i <cycleSprites; i++){
		isSprites[i] = loadImage(`media/is${String(i)}.png`);
	}
}

function setup() {

  let canvas = createCanvas(700, 700);
  canvas.position (10, 10); 
  canvas.class("bubbles")

	lastFrameTime = millis();

	for (var i = 0; i<450; i++) {
		var x = random(width);
		var y = random(height);
		var r = random(2, 10);
		var c = random(colors);
		let b = new Bubble(x,y,r,c);
		bubbles.push(b);
	
	}
}

function draw() {
		
	background(255);

	if (millis() - lastFrameTime > 1000 / cycleFPS){  												
			currentSprite++; 
		  if (currentSprite > cycleSprites-1) currentSprite = 0;
			lastFrameTime = millis();
	}
	

	imageMode(CENTER);
	image(isSprites[currentSprite],width/2,height/2,isSprites[currentSprite].width/4, isSprites[currentSprite].height/4); 	

	
	
	for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles[i].react();
    } else {
    }
    bubbles[i].move();
    bubbles[i].show();
  }
}


