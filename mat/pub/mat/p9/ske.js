let pro1,pro2,pro3
let ball;
let grd;
let mouse,engine,world

function setup() {
const cnv= createCanvas(w-20, h-120);
cnv.parent("cnv")
  engine = Matter.Engine.create();
  world = engine.world;

  pro1 = new Block(world, { x: 100, y: 200, w: 100, h: 20, color: 'white' });
  pro1.constrainTo(null, { length: 0, stiffness: .51 });
  pro4 = new Block(world, { x: 250, y: 200, w: 100, h: 20, color: 'white' });
  pro4.constrainTo(null, { length: 0, stiffness: .54 });

  pro2 = new Block(world, { x: 180, y: 300, w: 100, h: 20, color: 'blue' });
  pro2.constrainTo(null, { length: 0, stiffness: 1 });

  pro3 = new Block(world, { x: 100, y: 400, w: 100, h: 20, color: 'yellow' });
  pro3.constrainTo(null, { length: 0, stiffness: 1 });
  pro5 = new Block(world, { x: 250, y: 400, w: 100, h: 20, color: 'yellow' });
  pro5.constrainTo(null, { length: 0, stiffness: 1 });


// ball = new Ball(world, {x: 150, y:50, r:20, color: 'white'});
// grd = new Block(world, {x:100, y: h-100, w: 810, h: 30, color: 'white'}, {isStatic: true});

Matter.Runner.run(engine);
}

// let ran=random(10,30)
function mousePressed(){
ball = new Ball(world, {x: w*1/3+random(10,100), y:-50, r:20, color: 'white'});
// ball.draw();
}

function draw() {
  background('black');

  pro1.draw();  pro1.drawConstraints();
  pro2.draw();  pro2.drawConstraints();
  pro3.draw();  pro3.drawConstraints();
  pro4.draw();  pro4.drawConstraints();
  pro5.draw();  pro5.drawConstraints();

if(ball)ball.draw();
// grd.draw();

}


