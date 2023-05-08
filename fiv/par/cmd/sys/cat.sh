cat=$(cat tip)
declare -a tip

sel="select"
for i in "$cat"
do
    echo "ins$i"
    echo $(echo "$i")
done



#for ((i=0;i<${#tip[@]};i++))
#do
##printf "%d\n" $i
#printf "%d:%s\n" $i "${tip[$i]}"
#done
