
if test -z $1;then echo $0;else

    mkdir -p $1/js
    cp -r bsc/cmd $1
    cp -r bsc/son $1

fi
