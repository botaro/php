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

