
if test -z $1;then echo $0 nam;else

r=$(node js/dep.js $1 )
echo '{"cnt":"'$r'"}' > cnt/$1.json

fi

