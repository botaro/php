let tur=0,key=0,sto=0
let lef=[],mid=[],rig=[]
let ln=0,mn=0,rn=0
let fr=10,tim=20,j=0
let fet=[],col=[]
// let loo=false
 
function setup() {
    cnv=createCanvas(w-20,h-120)
    cnv.parent("cnv")

    frameRate(fr) 
    crN()
cl(lef[0].i)
    crCol()
//noLoop()
}

function draw(){
background(0)
j++
if(frameCount<20){
Beg()}else{Dis()
}
Tim()

}  
 


