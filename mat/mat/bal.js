function Bal() {
 clearWorld("Bal")
 // engine.gravity = -0.6
 engine.world.density = 1

 // create two boxes and a ground
 let balloon1 = Bodies.circle(450, 450, 80, {
 mass: 0.001,
 render: {
 fillStyle: 'red',
 strokeStyle: 'blue',
 lineWidth: 3,
 }
 });
 let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });


 // add all of the bodies to the world
 Composite.add(engine.world, [balloon1, ground]);

 setInterval(() => {
 Matter.Body.applyForce(balloon1, balloon1.position, { x: 0, y: -balloon1.mass / 100 })
 }, 100)

 Engine.update(engine);
}
