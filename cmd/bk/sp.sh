cd $1

for i in *mp4
do
#    se1=$(echo $i|sed s/\ /-/g|sed s/,//g|sed s/\'//g|sed s/---/-/g|sed s/-+-//g|sed s/JMascisThe-Fog//g)
se1=$(echo $i|sed s/J-MascisThe-Fog-//g)
    echo $se1
    mv "$i" "$se1"
done
