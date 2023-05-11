function setup() {
  let cnv=createCanvas(w-20, h-120);
    cnv.parent("cnv")
  noStroke();

  matter.init();

  pla1 = matter.makeBarrier(100, 100, 300, 10, {
  angle: radians(20),
  friction: 0
  });

  pla2 = matter.makeBarrier(300, 200, 200, 10, {
    angle: radians(-30),
    friction: 0
  });

// pro1 = new Block(world, { x: 100, y: 200, w: 100, h: 20, color: 'white' });
// pro1.constrainTo(null, { length: 0, stiffness: 1 });


}

