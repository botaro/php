function draw() {
  background(0);

  fill(255);
  pla1.show();
  pla2.show();

// pro1.draw();
// pro1.drawConstraints();

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
