function setup(){
const canvas = createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 20);
  for(var i = 0; i < 3; i ++){
  boxes[i] = new Box(450, 300 - i * 75, 50, 75);
  }
  bird = new Bird(150, 295, 32);
  slingShot = new SlingShot(147, 295, bird.body);
  
  const mouse = Mouse.create(canvas.elt)
  const options = {
    mouse: mouse, 
    }

  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint)
}


