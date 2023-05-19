let boo=false
let Bt=(nam,fun)=>{
bt=createButton(nam)
    bt.position(width/2,height/2)
    bt.mousePressed(fun)
    bt.addClass("btn btn-info")
    

}

let fun=()=>{
    let val=random(255)
//alert(val)
    boo=boo?true:false
let locf=()=>{window.location.repload()}
    
    boo?adC(bt,locf):0

}

