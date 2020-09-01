
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roofObject,rope1,rope2,rope3,rope4,rope5;
var Diameter 
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new  Bob(480,400,25);
	bobObject2 = new Bob (530,400,25);
	bobObject3= new Bob (580,400,25);
	bobObject4= new Bob(630,400,25);
	bobObject5 = new Bob (680,400,25);

	roofObject = new Roof(680,100,600,15);
	Diameter=50;
	
	rope1 = new Rope(bobObject1.body,roofObject.body,-Diameter*2,0);
	rope2 = new Rope(bobObject2.body,roofObject.body,-Diameter*1,0);
	rope3 = new Rope(bobObject3.body,roofObject.body,-Diameter*0,0);
	rope4 = new Rope(bobObject4.body,roofObject.body,-Diameter*-1,0);
	rope5 = new Rope(bobObject5.body,roofObject.body,-Diameter*-2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();
 bobObject2.display();
bobObject3.display();
 bobObject4.display();
  bobObject5.display();
  roofObject.display();
	  rope1.display();
	  rope2.display();
	  rope3.display();
	  rope4.display();
	  rope5.display();
 
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-50});
	}
}




