function Sli() {
 clearWorld("Sli")

 // add bodies
 let ground = Bodies.rectangle(395, h*4/5, 815, 50, { isStatic: true });
 let rockOptions = { density: 0.004 };
 let rock = Bodies.polygon(170, 450, 8, 20, rockOptions);
 let anchor = { x: 170, y: 450 };
 let elastic = Constraint.create({
 pointA: anchor,
 bodyB: rock,
 stiffness: 0.05,
 render: { strokeStyle: 'gray', lineWidth: 2 }
 });
 let ground2 = Bodies.rectangle(610, 250, 200, 20, { isStatic: true });

 let pyramid = Composites.pyramid(550, 0, 5, 10, 0, 0, function (x, y) {
 return Bodies.rectangle(x, y, 25, 40);
 });

}
