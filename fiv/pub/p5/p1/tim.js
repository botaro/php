function Tim(){
//key===0?Bt("start"):0

if(frameCount%fr==0 && tim>0){
tim--
if(tim==0){
textSize(64)
fill(255)
textAlign(CENTER,CENTER)
let tx,doc1="time up!",doc2="game over"
tx=key===0?doc1:doc2
text(tx,width/2,height/2+100)
Bt("AGAIN")

noLoop()
}

}

if(key>2){
Jud()
}

}

