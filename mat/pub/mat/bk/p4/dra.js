function draw(){
  background(0);
  Matter.Engine.update(engine);
  ground.show();
  for(let box of boxes){ 
  box.show();
  }
  bird.show();
  slingShot.show()
}
