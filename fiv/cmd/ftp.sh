
u=u580626920.pwiz3.com
p=Tmsm2010
# f=ftp://tmsm.co.jp
f=ftp://89.117.27.66

lftp -u$u,$p $f  -e"\
pwd
ls
lcd ..
lpwd
exit
"

