var ball;
var floor;

function setup() {
  // put setup code here.
  createCanvas(600, 600);

  ball = matter.makeBall(width / 2, 40, 80);
  floor = matter.makeBarrier(width / 2, height, width, 50);
}

function draw() {
  // put the drawing code here
  background(0);

  fill(127);
  floor.show();

  fill(255);
  ball.show();
}
