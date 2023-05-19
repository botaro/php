function Dis(){
  if(key==0){
    image(lef[tur].i,w*1/5,h*1/5,lef[tur].i.width*1/8,lef[tur].i.height*1/8)
    image(mid[tur].i,w*2/5,h*1/5,lef[tur].i.width*1/8,lef[tur].i.height*1/8)
    image(rig[tur].i,w*3/5,h*1/5,lef[tur].i.width*1/8,lef[tur].i.height*1/8)

  }
  if(key==1){
    image(ln.i,w*1/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)
    image(mid[tur].i,w*2/5,h*1/5,lef[tur].i.width*1/8,lef[tur].i.height*1/8)
    image(rig[tur].i,w*3/5,h*1/5,lef[tur].i.width*1/8,lef[tur].i.height*1/8)
cl("key:"+key)
cl(mid[tur].n)

  }
  if(key==2){

    image(ln.i,w*1/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)
    image(mn.i,w*2/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)
    image(rig[tur].i,w*3/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)

cl("key:"+key)
cl(rig[tur].n)
  }

  if(key==3){
    image(ln.i,w*1/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)
    image(mn.i,w*2/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)
    image(rn.i,w*3/5,h*1/5,lef[0].i.width*1/8,lef[0].i.height*1/8)

cl("key:"+key)
  }  

  tur=tur+1
  if(tur==5)tur=0
  
}
