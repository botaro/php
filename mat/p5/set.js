function setup(){
    dw=displayWidth
    dh=displayHeight
    cnv=createCanvas(dw,dh)
cnv.parent("cnv1")
cl(cnv.width)
cl(im[0])
    imX[1]=100
    imX[1]=100
    spd=0


    but[1]=createButton("move")
    but[1].addClass("btn btn-info")
    but[1].position(dw*1/5,dh*5/6)
    but[1].mousePressed(mov)

noLoop()

}
