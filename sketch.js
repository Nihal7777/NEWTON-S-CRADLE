
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roofObject,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new  bob();
	bobObject2 = new bob ();
	bobObject3= new bob ();
	bobObject4= new bob();
	bobObject5 = new bob ();

    roofObject = new roof(700,600,400,50);
	
	rope1 = new rope(bobObject1.body,roofObject.body,bobDiameter*2,0);
	rope2 = new rope(bobObject2.body,roofObject.body,bobDiameter*2,0);
	rope3 = new rope(bobObject3.body,roofObject.body,bobDiameter*2,0);
	rope4 = new rope(bobObject4.body,roofObject.body,bobDiameter*2,0);
	rope5 = new rope(bobObject5.body,roofObject.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



