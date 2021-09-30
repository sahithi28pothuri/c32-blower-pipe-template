const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball;

function setup() {
  createCanvas(900,1000);

  engine = Engine.create();
  world = engine.world;
   
  ball = Bodies.circle(250, 150, 25, {restitution:0.9,isStatic:false});
  World.add(world, ball);

  button=createButton("Click to blow");
  button.position(300,600)
  button.size(50,50);
  button.mouseClicked(blow);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);
}

function draw() 
{
  background(51);

  ellipse(ball.position.x, ball.position.y, 25)

  Engine.update(engine);
}
function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.1});
}