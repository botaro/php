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

function keyReleased(){
  if(keyCode === UP_ARROW) {
    Matter.Body.setVelocity(ball.body, {x: 0, y: charge});

    charge = 0;
  }
}


