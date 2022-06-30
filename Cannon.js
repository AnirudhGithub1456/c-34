class Cannon {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.cannon_image = loadImage("canon.png");
      this.cannon_base = loadImage("cannonBase.png");
    }
    display() {
      
      if (keyIsDown(RIGHT_ARROW)&& this.angle<0.7) {
        this.angle +=0.03;
        
      }
  
      if (keyIsDown(LEFT_ARROW)&& this.angle>-0.8) {
        this.angle -=0.03;
      }
  
  
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.cannon_image, 0, 0, this.width, this.height);
      pop();
      image(this.cannon_base, -25, 475, 300, 300);
      noFill();
    }
  }
  