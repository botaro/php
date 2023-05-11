let ground;
let ball1;
let ball2;
let cat;
let catPs;
let mouse;

function setup() {
  const canvas = createCanvas(w, h);
  let engine = Matter.Engine.create();
  let world = engine.world;

  cat = new Block(world, { x: 400, y: 520-20, w: 600, h: 50, color: 'white' });
  cat.constrainTo(null, { stiffness: 1, length: 0 });
  catPs = new Block(world, { x: 150, y: 555, w: 20, h: 50, color: 'white' }, {isStatic: true });
  ball1 = new Ball(world, { x: 600, y: 100, r: 50, color: 'white' }, {density: 0.01});
  ball2 = new Ball(world, { x: 110, y: 450, r: 20, color: 'white' });
  ground = new Block(world, { x: 400, y: height-10, w: 810, h: 25, color: 'white' }, {isStatic: true });

  mouse = new Mouse(engine, canvas);
  Matter.Runner.run(engine);
}

function draw() {
  background(0);
  ground.draw();
  ball1.draw();
  ball2.draw();
  cat.draw();
  cat.drawConstraints();
  catPs.draw();
}
