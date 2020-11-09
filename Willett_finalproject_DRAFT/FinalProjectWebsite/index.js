
  var speed = 4;
  var wiggle = 10;
  marks = [];
  let link1;
  let link2;
  let link3;

  // let color = {
    
  // }


  function setup() {
      var canvas = createCanvas( windowWidth, windowHeight);
      background(100);
      frameRate(15);
    
      for (var b = 0; b < 2400; b=b+int(random(45,80))){
        for (var c = 0; c < 2400; c=c+int(random(45,80))){
          var x = c;
          var y = b;
          var l = c+random(80,50);
          var w = b-random(25,100);
          let m = new Mark(x,y,l,w);
          marks.push(m);
        }
      }
      
      
      thelink1 = createA('bubbles.html',"CLICK<br> HERE<br> FOR<br> BUBBLES");
      thelink2 = createA('smoke.html',"CLICK<br> HERE<br> FOR<br> SMOKE");
      thelink3 = createA('camera.html',"CLICK<br> HERE<br> FOR A<br> CAMERA");
      
      link1 = new Link(random(0, 40),random(0, 40), 200, 200);
      link2 = new Link(random(0, 600), random(400, 600), 200, 200);
      link3 = new Link(random(800, 120), random(800, 120), 200, 200);
      
      
      
      


      
  }
  


    function draw() {
      background(100);
      for (let i = 0; i < marks.length; i++) {
      marks[i].move();
      marks[i].show();
      }

      link1.show();
      link1.move();
      if (link1.x > width-link1.w-1 || link1.x < 0 +1) {
        speed *= -1;
      }
      thelink1.position(link1.x, link1.y)
      
      link2.show();
      link2.move();
      if (link2.x > width-link2.w-1 || link2.x < 0 +1) {
        speed *= -1;
      }
      thelink2.position(link2.x, link2.y)
      
      link3.show();
      link3.move();
      if (link3.x > width-link3.w-1 || link3.x < 0 +1) {
        speed *= -1;
      }
      thelink3.position(link3.x, link3.y)
    }
  
   
  
  /////////////////////////////////
  class Mark {
    constructor(x,y,l,w){
    this.x = x;
    this.y = y;
    this.l = l;
    this.w = w;
    this.gravity = 2;
    }
    
    move(){
    this.x = this.x + random(-wiggle,wiggle);
    this.y = this.y + random(-wiggle,wiggle);
    this.l = this.l + random(-wiggle,wiggle);
    this.w = this.w + random(-wiggle,wiggle);
      
    // this.y = this.y + this.gravity;  
    // this.x = this.x + this.gravity;
    // this.y = constrain (this.y, 0, height);
    // this.x = constrain (this.x, 0, width);
  
    }
    
    show(){
      stroke(random(200,255));
      strokeWeight(5);
      line(this.x,this.y,this.l, this.w);
    
    }
  }
  
  /////////////////////////////////////////
  class Link {
    constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h; 
    }

    move(){
      
      this.x += speed;
      this.y += + random(-4,4);
      this.y = constrain (this.y, 0, height-this.h);
      this.x = constrain (this.x, 0, width-this.w);
      // if (this.x > width-this.w-1 || this.x < 0 +1) {
      //   speed *= -1;
      // }
  
    }

    show(){
      stroke(random(200,255));
      strokeWeight(5);
      rect(this.x,this.y,this.w, this.h, 40);

    }
  }
  
  

  