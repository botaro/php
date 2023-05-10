res=$(php php/key.php);
#echo $res

for i in $res
do
echo "https://www.youtube.com/watch?v=$i"
done

