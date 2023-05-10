# st=0x123
# r=$(node js/dep.js)
nw=ropsten

r=$(npx hardhat --network $nw run js/dep.js)
echo '{"res":"'$r'"}' > son/res.json

#terra1m6j8d35e8cghqjxad6f6elzeqz5t5xnjpukja5
