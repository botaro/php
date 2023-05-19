function Tim(){
if(frameCount%fr==0 && tim>0){
tim--
if(tim==0){
textSize(64)
fill(255)
textAlign(CENTER,CENTER)
text("time up!",width/2,height/2+100)
noLoop()
}

}
if(key>6){noLoop()
Bt("AGAIN")
}

}

