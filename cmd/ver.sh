
if test -z $1;then echo $0 nam;else
r=$(node js/cnf.js $1)
#echo $r
npx hardhat verify --network mun $r

fi

