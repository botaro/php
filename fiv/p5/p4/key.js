function keyPressed() {
  if(key == ' ') {
     slingShot.fly();
}
}

function mouseReleased() {
  setTimeout(() => {
   slingShot.fly();
  }, 100)
}


