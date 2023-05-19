<button id=nec class=btn >connect</button>

<script>
let nec=gId("nec")

clA(nec,"btn-warning")

let r=async()=>{
let acs=await weth.request({method:"eth_requestAccounts"})
,acc=acs[0]
,ac2="accout: "+acc.slice(0,5)+"..."
cl(weth.isConnected() )

//axios.put("/",{adr:acc})
clR(nec,"btn-warning")
clA(nec,"btn-info")
inH(nec,ac2)
}

r()
</script>
