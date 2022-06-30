class Crate{
    constructor(x, y) {
        var options = {
            'restitution':1,
        }
        this.body = Bodies.rectangle(x, y, 200,200, options);
        this.width = 200;
        this.height = 200;
        this.image = loadImage("crate.png");
        World.add(world, this.body);
        this.Visiblity = 255
      }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed < 5){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
     else{
        setTimeout(()=>{
            push();
            this.Visiblity = this.Visiblity - 2;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 50, 50);
            pop();
        }, 2500);
        World.remove(world, this.body);
        
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
};