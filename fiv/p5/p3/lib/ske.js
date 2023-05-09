//set up for matterJS
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//const Render = Matter.Render;

var engine, world, body, render;

//variables
var R1, R2, R3, R4, R5;
var FR1, FR2, FR3;
var T1, T2, T3, T4, T5;
var FT1, FT2, FT3, FT4, FT5;
var ball;
var screw1, screw2, screw3, screw4, screw5, screw6, screw7, screw8, screw9, screw10;
var pad1, pad2;
var pad1State, pad2State;

var charge;
var gamestate;

/*
Calculations for the center of the playing area
450 - 25 (R5's space) - 70 (R1's space) = 355 pixels to use
355/2 + 25 (to be far from  R5) = 202.5 which should be the center
*/

function preload(){  //load in the font
}

function setup() {
  //create canvas 450 700
let cnv=createCanvas(450,700)
cnv.parent("cnv")

  //more matterJS set up
  engine = Engine.create();
  world = engine.world;
  //render = Render.create({ element: document.body, engine: engine, options: { width: 450, height: 700, wireframes: false } });

  //create the s of the machine
  R1 = new RO(390, 370, 20, 520);
  R2 = new RO(450, 350, 50, 1000);
  R3 = new RO(405, 650, 50, 140);
  R4 = new RO(225, 20, 450, 100);
  R5 = new RO(0, 350, 50, 1000);

  FR1 = new FRO(202.5, 350, 100, 10);
  FR2 = new FRO(132.5, 425, 100, 10);
  FR3 = new FRO(272.5, 425, 100, 10);

  T1 = new TriangleObject(415, 60, 40, PI/11);
  T2 = new TriangleObject(132.5, 220, 30, PI/2);
  T3 = new TriangleObject(272.5, 220, 30, PI/2);
  T4 = new TriangleObject(22.5, 585, 35, PI/2);
  T5 = new TriangleObject(382.5, 585, 35, PI/2);
  T6 = new TriangleObject(30, 60, 40, PI/1.15);

  FT1 = new FlexableTriObj(142.5, 520, 25, 0);
  FT2 = new FlexableTriObj(262.5, 520, 25, PI/-3);
  FT3 = new FlexableTriObj(202.5, 150, 35, PI/2);
  FT4 = new FlexableTriObj(62.5, 275, 30, PI/2);
  FT5 = new FlexableTriObj(342.5, 275, 30, PI/2);

  screw1 = new Screw(FR1.body, {x: 202.5, y: 350}, 1, 0, 0);
  screw2 = new Screw(FR2.body, {x: 122.5, y: 425}, 1, 0, 0);
  screw3 = new Screw(FR3.body, {x: 272.5, y: 425}, 1, 0, 0);

  screw4 = new Screw(FT1.body, {x: 142.5, y: 520}, 1, 0, 0);
  screw5 = new Screw(FT2.body, {x: 262.5, y: 520}, 1, 0, 0);
  screw6 = new Screw(FT3.body, {x: 202.5, y: 150}, 1, 0, 0);

  screw7 = new Screw(FT4.body, {x: 62.5, y: 275}, 1, 0, 0);
  screw8 = new Screw(FT5.body, {x: 342.5, y: 275}, 1, 0, 0);

  ball = new Ball(400, 550);

  pad1 = new Pad(100, 670, 130, 40, 1);
  screw9 = new Screw(pad1.body, {x: 40, y: 670}, 1, 0, -65);

  pad2 = new Pad(305, 670, 130, 40, 0);
  screw10 = new Screw(pad2.body, {x: 365, y: 670}, 1, 0, 65);

  charge = 0;
  gamestate = "waiting";

  pad1State = "resting";
  pad2State = "resting";
}

function draw() {
  //draw background
  background(0,0,0);  

  //update the engine
  Engine.update(engine);
  //Render.run(render);

  //display the s
  R1.display();
  R2.display();
  R3.display();
  R4.display();
  R5.display();

  FR1.display();
  FR2.display();
  FR3.display();

  T1.display();
  T2.display();
  T3.display();
  T4.display();
  T5.display();
  T6.display();

  FT1.display();
  FT2.display();
  FT3.display();
  FT4.display();
  FT5.display();

  ball.display();

  pad1.display();
  pad2.display();

  //text
  fill("white");
  textAlign(CENTER);
  textSize(30);
  text("FANTASTIC PINBALL", 225, 40);
// textSize(15);
// text("Hit Space To Reset", 225, 60);

  //charge the ball
  if(keyIsDown(UP_ARROW) && gamestate === "waiting"){
    fill("white");
    textAlign(CENTER);
    textSize(10);

    if(charge > -50){
      charge-=0.3;
      text("Charge: " + round(charge * -1), 410, 610);
    }else{
      text("Charge: MAX", 410, 610);
    }
  }

  //make it so you can't fire the ball after it passes a certain x position
  if(ball.body.position.x < 390){
    gamestate = "playing";
  }

  //set the pad angles
  if(pad1State === "resting"){
    Matter.Body.setAngle(pad1.body, 0);
  }

  if(pad2State === "resting"){
    Matter.Body.setAngle(pad2.body, 0);
  }

  //set pads back to normal after flinging
  if(pad1.body.angle > 0){
    Matter.Body.setAngularVelocity(pad1, 0);
    pad1State = "resting";
  }

  if(pad2.body.angle < 0){
    Matter.Body.setAngularVelocity(pad2, 0);
    pad2State = "resting";
  }
}//dra

function keyReleased(){
  if(keyCode === UP_ARROW) {
    Matter.Body.setVelocity(ball.body, {x: 0, y: charge});

    charge = 0;
  }
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    pad1State = "flinging";
    Matter.Body.setAngularVelocity(pad1.body, -0.5);
  }

  if(keyCode === RIGHT_ARROW){
    pad2State = "flinging";
    Matter.Body.setAngularVelocity(pad2.body, 0.5);
  }

  if(keyCode === 32){
    gamestate = "waiting";
    Matter.Body.setPosition(ball.body, {x: 400, y: 550});
  }
}
