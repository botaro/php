
if test -z $1;then echo $0;else

npx hardhat run --network goe ./js/get.js

# r=$(npx hardhat run js/dep.js $1 ) 
# echo '{"cnt":"'$r'"}' > cnt/$1.json

fi
