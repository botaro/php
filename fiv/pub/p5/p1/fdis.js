function crFet(){
for (let i = 0; i < fet.length / 2; i++) {
    fet[i].fDis();

    if (fet[i].y > height) {
      fet[i] = new Fet(random(0, width), random(-height, 0), random(-1, 1));
    }
  }

  for (let i = int(fet.length / 2); i < fet.length; i++) {
    fet[i].fDis();

    if (fet[i].y > height) {
      fet[i] = new Fet(random(0, width), random(-height, 0), random(-1, 1));
    }
  }

}
