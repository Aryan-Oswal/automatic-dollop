var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	








	engine = Engine.create();
	world = engine.world;

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	box1 = new Box()
	
	paper = new Paper(100 ,0,10)
	Engine.run(engine);
  
}


function draw() {
	background('white')
	
  rectMode(CENTER);
	box1.display();
	paper.display()
	rectMode(CENTER)
	rect(ground.position.x ,ground.position.y,width  ,10)
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body, paper.body.position, {x: 5 , y: -4} )
  }
}



