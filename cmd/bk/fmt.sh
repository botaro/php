
if test -z $1;then echo $0;else

sed -i "s/^     //g" $1
sed -i "s/^    //g" $1
sed -i "s/^   //g" $1
sed -i "s/^  //g" $1
sed -i "s/^ //g" $1
sed -i "s/^\t\t//g" $1
sed -i "s/^\t//g" $1

fi
