org=node
chg=code

if [ -z $1 ];then
    echo $0
else
grep --color $org $1
#sed -i s/$org/$chg/g $1
fi
