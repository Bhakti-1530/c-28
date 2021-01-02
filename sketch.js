
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var stone, tree, ground;
var mango1, mango2, mango3, mango4, mango5;
var boy, boyImg;
var slingshot;
function preload(){
	boyImg = loadImage('boy.png.png');
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;
  
 
  //Create the Bodies Here.
 
  boy = createSprite(250,530,200,20);
 
	tree = new Tree(900,400,500,500);
  stone = new Stone(170,450,40);
	ground = new Ground(600,690,1200,40);
	mango1 = new Mango(840,250,50,50);
	mango2 = new Mango(780,330,50,50);
	mango3 = new Mango(970,220,50,50);
	mango4 = new Mango(1090,370,50,50);
	mango5 = new Mango(930,295,50,50);
	mango6 = new Mango(990,350,50,50);
	mango7 = new Mango(880,350,50,50);
	mango8 = new Mango(900,210,50,50);
	mango9 = new Mango(1030,270,50,50);
  slingshot = new Slingshot(stone.body,{x:200,y:480});
}
  



function draw() {
  rectMode(CENTER);
  background(100);
  
  tree.display();
  ground.display();
  boy.scale=0.1; 
  boy.addImage(boyImg);
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  slingshot.display(); 
  drawSprites();
 
}
function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:170, y:450});
    launcherObject.attach(stone.body);
  }
}


