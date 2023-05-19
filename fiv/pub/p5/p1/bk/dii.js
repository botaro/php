function Dis(){

  if(key==0){
    image(lef[tur],w*1/5,h*1/5,l430.width*1/8,l430.height*1/8)
    image(mid[tur],w*2/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)
    image(rig[tur],w*3/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)

  }
  if(key==2){
    image(ln,w*1/5,h*1/5,l430.width*1/8,l430.height*1/8)
    image(mid[tur],w*2/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)
    image(rig[tur],w*3/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)


  }
  if(key==4){

    image(ln,w*1/5,h*1/5,lef[0].width*1/8,lef[0].height*1/8)
    image(mn,w*2/5,h*1/5,lef[0].width*1/8,lef[0].height*1/8)
    image(rig[tur],w*3/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)


  }

  if(key==6){
    image(ln,w*1/5,h*1/5,lef[0].width*1/8,lef[0].height*1/8)
    image(mn,w*2/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)
    image(rn,w*3/5,h*1/5,lef[tur].width*1/8,lef[tur].height*1/8)

  }  

  tur=tur+1
  if(tur==10)tur=0
  
}
