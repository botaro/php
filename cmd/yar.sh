dir=/mnt/home/.config/nvm/versions/node/v16.18.1/bin

if test -z $1;then echo $0;else

$dir/yarn add -D @uniswap/v3-periphery

fi
