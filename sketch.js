
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground1,blockage1,blockage2;
var dustbin1,paper1;
var dustCover,dci
function preload()
{
	dci = loadImage("helli.jpg")
}


function setup() {
	createCanvas(1200, 400);

dustCover = createSprite(900,300,20,20);
dustCover.addImage(dci)

	engine = Engine.create();
  world = engine.world;
  
 

	//Create the Bodies Here.
 

  paper1=new paper(150,320,75);
  dustbin1=new dustbin(800,325,15,100);
  dustbin2=new dustbin(900,380,200,15);
  dustbin3=new dustbin(1000,325,15,100);
  ground1=new ground(600,392.5,1200,15);
  blockage1=new ground(1180,200,50,1200);
  blockage2=new ground(280,10,1600,20)
	
  
}


function draw() {
  
  background("yellow");
   textSize(20)
  text("Up arrow to move right,down to left",200,40)
  Engine.update(engine);

  drawSprites()

  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  blockage1.display();
  blockage2.display();


}
function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:105,y:-105});
  }
  if(keyCode === DOWN_ARROW)
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:-105,y:-105});
  }
  if(keyCode === 32)
  {
    paper1.isStatic =true
  }
}


