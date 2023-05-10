function setup(){
let cnv=createCanvas(w,h)
cnv.parent("cnv")

var engine = Engine.create(),
world = engine.world;

// var stack = Composites.stack(20, 20, 10, 5, 0, 0, function(x, y) {
// var sides = Math.round(Common.random(1, 8));

// var chamfer = null;
// if (sides > 2 && Common.random() > 0.7) chamfer = {radius: 10};

// switch (Math.round(Common.random(0, 1))) {
// case 0:
// if (Common.random() < 0.8) {
// return Bodies.rectangle(x, y, Common.random(25, 50), Common.random(25, 50), { chamfer: chamfer });
// } else {
// return Bodies.rectangle(x, y, Common.random(80, 120), Common.random(25, 30), { chamfer: chamfer });
// }
// case 1:
// return Bodies.polygon(x, y, sides, Common.random(25, 50), { chamfer: chamfer });
// }
// });

// Composite.add(world, stack);

}
