function Jud(){
    let t1="大あたり！！！"
    let t2="あたり"
    let t3="ハズレ"
    stroke(0,0,255)
    strokeWeight(10)
  if(ln.n == mn.n && mn.n == rn.n){
let t1w=textWidth(t1)      
      fill(255,10,10)
     text(t1,w/2-t1w/2,h*2/5);
crBig()

  }else if(ln.n == mn.n || mn.n == rn.n || ln.n == rn.n){
let t2w=textWidth(t2)
      fill(200,200,255)
     text(t2,w/2-t2w/2,h*2/5);
crFet()

  }else{
let t3w=textWidth(t3)
      fill(0,255,0)
     text(t3,w/2-t3w/2,h*2/5);
  }

Bt("AGAIN")
}

