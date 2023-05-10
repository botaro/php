
pr=0.0007
p2=0.0002
mnt=$(echo 1000*1000*1000|bc)
mn2=$(echo 1000*1000|bc)

cap=$(echo $pr*$mnt|bc)
ca2=$(echo $p2*$mn2|bc)

echo $cap
echo $ca2

