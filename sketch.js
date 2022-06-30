
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cannon
var angle
var balls = [];

var score = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  rectMode(CENTER)
  angleMode(CENTER)
  angle = 0

  cannon = new Cannon(120,610,230,200,angle)
  crate_1 = new Crate(110,800)

  crate_2 = new Crate(700,640)

  crate_3 = new Crate (700, 640)

  crate_4 = new Crate(700,650)

  crate_5 = new Crate(1000,800)

  crate_6 = new Crate(1000,640)

  ground = new Ground(100,950,10000,20)

}

function draw() 
{
  background(51);
  Engine.update(engine);

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
    
  }

  cannon.display()
  
  crate_1.display()
  crate_2.display()
  crate_2.score()
  crate_3.display()
  crate_3.score()
  crate_4.display()
  crate_4.score()
  crate_5.display()
  crate_5.score()
  crate_6.display()
  crate_6.score()
  
  ground.show()  
 
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)

  if(score >= 1000){
    noStroke();
    textSize(35)
    fill("red")
    text("This game is broken", 1250, 50 )
    noStroke();
    textSize(35)
    fill("white")
    text("This game is broken", 1250, 40 )
    noStroke();
    textSize(35)
    fill("red")
    text("This game is broken", 1250, 30 )

  }

}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y, 60);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body, cannon.angle);
    balls.push(cannonBall);
  }
}

function showCannonBalls(ball, index) {
  if (ball) {
    ball.display();
    ball.animate();
    if (ball.body.position.x >= width || ball.body.position.y >= height - 82) {
      if(!ball.isSink){
        ball.remove(index);
      }
        
      
    }
  }
}
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}