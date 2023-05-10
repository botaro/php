
if test -z $1;then echo $0 nam;else

npx hardhat flatten sol/$1.sol >  sol/f$1.sol

fi

