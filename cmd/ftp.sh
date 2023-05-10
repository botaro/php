
u=u580626920.pwiz3.com
p=Tmsm2010
# f=ftp://tmsm.co.jp
f=ftp://89.117.27.66
d=$(pwd)
d2=${d: -3}
echo $d2

if test -z $1;then echo $0;else

echo $1
lftp -u$u,$p $f  -e"\
pwd
cd php
lpwd
mirror -R $1
exit
"

fi
