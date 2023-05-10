# st=0x123
# r=$(node js/dep.js)
nw=localhost

r=$(npx hardhat --network $nw run js/dep.js)
echo '{"cnt":"'$r'"}' > cnf/loc.json

