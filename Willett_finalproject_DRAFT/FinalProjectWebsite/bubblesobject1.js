class Bubble {
	constructor(x,y,r,c){
	this.x = x;
	this.y = y;
	this.r = r;
	this.c = c;
	this.gravity = map(this.r, 2, 10, 0.5, 1.5);
	}

	
	react(){
		this.x = this.x + 0;
		// for (var i = -1; i >= -400 && i<0; i=i-1) {
		// 	this.y = this.y + i;
		// }
		
		this.y = this.y + random(0, -800);
		this.y +=this.gravity;
	}
	
	contains(px, py){
		let d = dist(px, py, this.x, this.y);
		if (d<this.r+25){
			return true;
		} else {	
			return false;}
		}
	
	
	move(){
	this.x = this.x + random(-4,4);
	this.y = this.y + random(-4,4);
	this.y = this.y + this.gravity;                                                          
	this.y = constrain (this.y, 0, height);
	this.x = constrain (this.x, 0, width);
	
	
	}
	
	show(){
		fill(this.c);
		noStroke();
		ellipse(this.x, this.y, this.r*10);
	
	}
}
