let box;
let boxImg;
let ball;
let balImg;
let ground;
let mouse;

function preload() {
  balImg = loadImage(i430)
  boxImg = loadImage(i431)

}

function setup() {
  const canvas = createCanvas(w, h);

  let engine = Matter.Engine.create();
  let world = engine.world;
  box = new Block(world, { x: 200, y: 200, w: 64, h: 64, image: boxImg});
  ball = new Ball(world, { x: 100, y: 50, r: 45, image: balImg});
  ground = new Block(world,
    { x: 200, y: 500, w: w-20, h: 20, color: 'white'},
    { isStatic: true, angle: Math.PI * 0.06 }
  );

  mouse = new Mouse(engine, canvas);
  Matter.Runner.run(engine);
}

function draw() {
  background(0);
  box.draw();
  ball.draw();
  ground.draw();
  mouse.draw();
}
