function draw() {
  background(0,0,0);  

  Engine.update(engine);

R1.display();
R2.display();
R3.display();
// R4.display();
// R5.display();

FR1.display();
FR2.display();
FR3.display();

// T1.display();
// T2.display();
// T3.display();
// T4.display();
// T5.display();
// T6.display();

// FT1.display();
// FT2.display();
// FT3.display();
// FT4.display();
// FT5.display();

  ball.display();

  pad1.display();
  pad2.display();

  //text
// fill("white");
// textAlign(CENTER);
// textSize(30);
// text("FANTASTIC PINBALL", 225, 40);
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

