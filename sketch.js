
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperBall;

function preLoad()
{
	paperImg=loadImg("sprites/paper.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
	paperBall=new paper(100,600,50,50);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  paperBall.display();
  groundObject.display();
  dustbinObj.display();

}

