function Box() {
 clearWorld("Box")
 // create two boxes and a ground
 let boxA = Bodies.rectangle(400, 200, 80, 80);
 let boxB = Bodies.rectangle(450, 50, 80, 80, {
 render: {
 fillStyle: 'red',
 strokeStyle: 'blue',
 lineWidth: 3

 }
 });
 let ground = Bodies.rectangle(400, h*4/5, 810, 60, { isStatic: true });

 // add all of the bodies to the world
 Composite.add(engine.world, [boxA, boxB, ground]);

 Engine.update(engine);
}
