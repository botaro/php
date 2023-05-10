if test -z $1;then echo $0 acc,com,tes;else

    case $1 in
    acc)npx hardhat accounts;;
    com)npx hardhat compile;;
    tes)npx hardhat test;;
    dep)npx hardhat scripts/dep.js;;
    *) echo $0 acc,com,tes,dep;;
esac
#npx hardhat $1

fi
