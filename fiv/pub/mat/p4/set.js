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
