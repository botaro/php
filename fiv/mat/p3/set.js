function setup() {
  // put setup code here.
  let cnv=createCanvas(w*8/9, h*7/9);
  cnv.parent("cnv")

  ball = matter.makeBall(width / 2, 40, 80);
  floor = matter.makeBarrier(width / 2, height, width, 50);
}


