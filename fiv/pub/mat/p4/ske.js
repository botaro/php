let bou = [];
let cir = [];

function setup() {

  let cnv=createCanvas(w-50, h-120);
  cnv.parent("cnv")

  matter.init();
  bou.push(
    matter.makeBarrier(150, 100, width * 0.6, 20, {
      angle: radians(20),
      friction: 0.02,
      restitution: 0.95,
    })
  );
  bou.push(
    matter.makeBarrier(250, 300, width * 0.6, 20, {
      angle: radians(-20),
      friction: 0.8,
      restitution: 0.95,
    })
  );
}

function draw() {
  background(180);

  push();
  strokeWeight(1);
  noStroke();
  fill(0, 100, 200);
  for (let i = 0; i < bou.length; i++) {
    bou[i].show();
  }
  pop();
  
  push();
  strokeWeight(1);
  stroke(255);
  fill(0, 0, 80);
  for (let i = cir.length - 1; i >= 0; i--) {
    let b = cir[i];
    b.show();
    if (b.isOffCanvas()) {
      matter.forget(b);
      cir.splice(i, 1);
    }
  }
  pop();
}

function mouseDragged() {
  cir.push(
    matter.makeBall(mouseX, mouseY, random(10, 20), {
      friction: 0.01,
      restitution: 0.95,
    })
  );
}
