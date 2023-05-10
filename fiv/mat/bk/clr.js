let lastClear = "(not given)"
function clearWorld(exampleName) {
 if (lastClear != exampleName) {
 lastClear = exampleName

 Matter.Composite.clear(engine.world, false)
 }
}
