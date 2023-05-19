function Dis(){

  textSize(60)
  fill(255)
  if(key==0){
    text(lef[tur],w*1/5,h*2/5)
    text(mid[tur],w*2/5,h*2/5)
    text(rig[tur],w*3/5,h*2/5)
  }
  if(key==1){
    text(lef[ln],w*1/5,h*2/5)
    text(mid[tur],w*2/5,h*2/5)
    text(rig[tur],w*3/5,h*2/5)
  }
  if(key==2){
    text(lef[ln],w*1/5,h*2/5)
    text(mid[mn],w*2/5,h*2/5)
    text(rig[tur],w*3/5,h*2/5)
  }
  if(key==3){
    text(lef[ln],w*1/5,h*2/5)
    text(mid[mn],w*2/5,h*2/5)
    text(rig[rn],w*3/5,h*2/5)
  }  

  tur=tur+1
  if(tur==10)tur=0
  
}
