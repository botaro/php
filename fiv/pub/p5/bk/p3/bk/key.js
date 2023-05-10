function keyPressed(){
  if(keyCode === LEFT_ARROW){
    paddle1State = "flinging";
    Matter.Body.setAngularVelocity(paddle1.body, -0.5);
  }

  if(keyCode === RIGHT_ARROW){
    paddle2State = "flinging";
    Matter.Body.setAngularVelocity(paddle2.body, 0.5);
  }

  if(keyCode === 32){
    gamestate = "waiting";
    Matter.Body.setPosition(ball.body, {x: 400, y: 550});
  }
}
