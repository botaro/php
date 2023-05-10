//let ropes = [];
function Cut() {
 clearWorld("Cut")
 engine.world.density = 1

 // create two boxes and a grd
 let bal1 = Bodies.circle(500, 500, 80, {
 mass: 0.001,
 render: {
 fillStyle: 'red',
 strokeStyle: 'blue',
 lineWidth: 3,
 }
 });
 let grd = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

 // add all of the bodies to the world
Composite.add(engine.world, [bal1, grd]);

 //add a string
 let rope = Constraint.create({

 pointA: { x: 200, y: 550 },
 bodyB: bal1,
 render: { strokeStyle: 'gray', lineWidth: 2, }
 })
 Composite.add(engine.world, rope);
 ropes.push(rope)


 setInterval(() => {
 Matter.Body.applyForce(bal1, bal1.position, { x: 0, y: -bal1.mass / 100 })
 }, 100)

function CutTheRope() {
 let rope = ropes[0]
 Composite.remove(engine.world, rope)
 ropes.shift()
}

 Engine.update(engine);

}


