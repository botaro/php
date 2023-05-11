let w,h,dw,dh,ww,wh,cnv
let but1,but2,but3
let im=[],but=[],imX=[],imY=[]
let spd

for (j=0;j<5;j++)im.push("im"+j)
for (j=0;j<5;j++)but.push("but"+j)
for (j=0;j<5;j++)imX.push("imX"+j)
for (j=0;j<5;j++)imY.push("imY"+j)

let bod=gTn("body")[0]
w=document.body.clientWidth
h=document.body.clientHeight

let cnt=crE("div")
apC(bod,cnt)
clA(cnt,"container-fluid")
let row=crE("div")
apC(cnt,row)
clA(row,"row")
cl(row)
