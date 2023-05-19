//https://www.youtube.com/watch?v=urR596FsU68
let world;
let boxes = [];
let grd
let sizes = [5, 10, 20, 30, 40];

function setup() {
  cnv= createCanvas(w*4/5, h*4/5);
  cnv.parent("cnv")
  engine = Engine.create();
  world = engine.world;
  grd=new Boundary(0, height, width, 30)
Bt("b1",fun)

}


function draw() {
Engine.update(engine);
background(51);
// print (frameCount);
if (frameCount % 5 === 0 && frameCount< 200) {
let size = random(sizes);
boxes.push(new Box(width / 2, 80, size, size));
}
  

for (let box of boxes)box.show();
grd.show()
  
if(frameCount>500) noLoop()

}

