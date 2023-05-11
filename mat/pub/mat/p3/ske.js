var balls = [];
var pla1;
var pla2;

function setup() {
  let cnv=createCanvas(w, h-20);
    cnv.parent("cnv")
  noStroke();

  matter.init();

  pla1 = matter.makeBarrier(200, 100, 300, 30, {
    angle: radians(20),
    friction: 0
  });

  pla2 = matter.makeBarrier(400, 400, 300, 30, {
    angle: radians(-30),
    friction: 0
  });
}

function draw() {
  background(0);

  fill(255);
  pla1.show();
  pla2.show();

  fill(127);
  for (var i = balls.length - 1; i >= 0; i--) {
    var b = balls[i];
    b.show();
    if (b.isOffCanvas()) {
      matter.forget(b);
      balls.splice(i, 1);
    }
  }
}

function mousePressed() {
  balls.push(matter.makeBall(mouseX, mouseY, random(30, 60), {
    friction: 0
  }));
}

