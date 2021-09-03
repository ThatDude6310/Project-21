
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var left_wall
var right_wall

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	opt_1={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball= Bodies.circle(200,100,20,opt_1)
	World.add(world,ball)

	Engine.run(engine);

	ground = new Ground(500,690,1000,20)
    left_wall= new Ground(700,600,10,160)
	right_wall= new Ground(900,600,10,160)
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,40)

  ground.show()
  left_wall.show()
  right_wall.show()

  drawSprites();
 
}

function keyReleased(){
    if(keyCode===RIGHT_ARROW){
		console.log("hello there");
        force1()
    }
}

//function keyReleased(){
    //if(keyCode===LEFT_ARROW){
		//console.log("hello there");
        //force2()
    //}
//}



function force1(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0})
}

function force2(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:-50,y:0})
}




