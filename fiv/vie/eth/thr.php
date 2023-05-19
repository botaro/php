<button id=aid class="btn btn-success"></button>
<script>

let aid=gId("aid")
,fun=async()=>{
let acs=await weth.request({method:"eth_requestAccounts"})
,acc=acs[0]
cl(acc)
inH(aid,acc)
//cl(aid)
}
fun()
</script>
