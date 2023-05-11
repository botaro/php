let engine;
let balls;
let boxes;
let grd;
let mouse;

function setup() {
  const canvas = createCanvas(w, h);

  let engine = Matter.Engine.create();
  let world = engine.world;

  // add stacks
  boxes = new Stack(world, {
    x: 200, y: 0, cols: 3, rows: 10, colGap: 3, rowGap: 3, color: 'white',
    create: (x, y) => Matter.Bodies.rectangle(x, y, 50, 50)
  });
  balls = new Stack(world, {
    x: 150, y: 0, cols: 3, rows: 10, colGap: 3, rowGap: 3, color: 'white',
    create: (x, y) => Matter.Bodies.circle(x, y, 25, { restitution: 1 })
  });

grd = new Block(world, { x: 140, y: height-150, w: w, h: 50, color: 'grey' }, {isStatic: true });
  mouse = new Mouse(engine, canvas);
  Matter.Runner.run(engine);
}

function draw() {
  background('black');
  boxes.draw();
  balls.draw();
  grd.draw();
  mouse.draw();
}
