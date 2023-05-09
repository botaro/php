function preload(){  //load in the font
}

function setup() {
// let w=displayWidth*7/7;let h=displayHeight*6/7
w=450;h=700

//create canvas 450 700
let cnv=createCanvas(w,h)
cnv.parent("cnv")

  //more matterJS set up
  engine = Engine.create();
  world = engine.world;

  ball = new Ball(w-150, h-150);

  pad1 = new Pad(w*1/4, h*9/10, 130, 40, 1);
  screw9 = new Screw(pad1.body, {x: 30, y: h*9/10}, 1, 0, -65);

  pad2 = new Pad(w*1/2, h*9/10, 130, 40, 0);
  screw10 = new Screw(pad2.body, {x: 365, y: h*9/10}, 1, 0, 65);

R1 = new RO(w*3/4+52, h*2/5+70, 20, 520);
R2 = new RO(w, 350, 50, 1000);
R3 = new RO(w*9/10, h-20, 50, 140);
R4 = new RO(225, 20, w*9/10, 100);
R5 = new RO(0, 350, 10, h);

  FR1 = new FRO(202.5, 350, 100, 10);
  FR2 = new FRO(132.5, 425, 100, 10);
  FR3 = new FRO(272.5, 425, 100, 10);

  T1 = new TriangleObject(415, 60, 40, PI/11);
  T2 = new TriangleObject(132.5, 220, 30, PI/2);
  T3 = new TriangleObject(272.5, 220, 30, PI/2);
  T4 = new TriangleObject(22.5, 585, 35, PI/2);
  T5 = new TriangleObject(382.5, 585, 35, PI/2);
  T6 = new TriangleObject(30, 60, 40, PI/1.15);

  FT1 = new FlexableTriObj(142.5, 520, 25, 0);
  FT2 = new FlexableTriObj(262.5, 520, 25, PI/-3);
  FT3 = new FlexableTriObj(202.5, 150, 35, PI/2);
  FT4 = new FlexableTriObj(62.5, 275, 30, PI/2);
  FT5 = new FlexableTriObj(342.5, 275, 30, PI/2);

  screw1 = new Screw(FR1.body, {x: 202.5, y: 350}, 1, 0, 0);
  screw2 = new Screw(FR2.body, {x: 122.5, y: 425}, 1, 0, 0);
  screw3 = new Screw(FR3.body, {x: 272.5, y: 425}, 1, 0, 0);

  screw4 = new Screw(FT1.body, {x: 142.5, y: 520}, 1, 0, 0);
  screw5 = new Screw(FT2.body, {x: 262.5, y: 520}, 1, 0, 0);
  screw6 = new Screw(FT3.body, {x: 202.5, y: 150}, 1, 0, 0);

  screw7 = new Screw(FT4.body, {x: 62.5, y: 275}, 1, 0, 0);
  screw8 = new Screw(FT5.body, {x: 342.5, y: 275}, 1, 0, 0);


  charge = 0;
  gamestate = "waiting";

  pad1State = "resting";
  pad2State = "resting";
}

