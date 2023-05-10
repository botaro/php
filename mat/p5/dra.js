function draw(){
background(0)
imX[1]=imX[1]+spd
image(im[0],imX[1],cnv.width*1/4,im[0].width/2,im[0].height/2)

print(imX[1])
    if(imX[1]>dw)noLoop()

//translate(imX[1],imY[1])


}
