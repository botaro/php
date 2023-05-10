cd burg

for i in *.mp4
do
#    ren=${i: -15}
ren=$(echo "$i"|sed s/\ /-/g|sed s/---/-/g)
    echo $ren
mv  "$i" "$ren"
done

