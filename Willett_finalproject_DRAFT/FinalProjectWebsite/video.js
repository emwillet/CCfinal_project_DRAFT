var capture;
let innoimg;
let innovate = {
	speed: 2,
	y: 0,
	x: 0,
}


function preload() {
	innoimg = loadImage("media/Innovationwhite2-01.png");
}

function setup() {
  createCanvas(1080, 890);
  capture = createCapture(VIDEO);
  capture.size(1080, 890);
	capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 1080, 890); 
	filter(POSTERIZE, 4);
	if (keyIsDown(83)){
		filter(THRESHOLD);
		innovate.y = innovate.y + innovate.speed*5;
	}
	else if (keyIsDown(65)){
		filter(GRAY);
		filter(POSTERIZE, 16);
		for (j=-10000; j <10000; j = j + 1200){
			for (i=-1000; i <2000; i = i +200){
			image(innoimg, innovate.x + j, innovate.y + i, innoimg.width/2, innoimg.height/2);
				if (innovate.x > 10000) {
					innovate.x = 0;
					}
				if (innovate.y <-1000 || innovate.y >2000){
				 innovate.y = 0;
				}
				}
				innovate.x = innovate.x + innovate.speed;
		}
	}
	else if (keyIsDown(68)){
		filter(INVERT);
	}
	
	innovation();
}


function innovation() {
	for (i=-1000; i <2000; i = i +200){
		image(innoimg, innovate.x, innovate.y + i, innoimg.width/2, innoimg.height/2);
			if (innovate.y < -1400) {
				innovate.y = 0;
			}
	}
	innovate.y = innovate.y - innovate.speed; 
	print(innovate.y);
}