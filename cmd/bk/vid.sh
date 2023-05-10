key=$(node js/key.js)
echo $key
rep=$(echo $key|sed s/\ /-/g)
echo $rep
kak=$(echo $rep|kakasi -i utf8 -Ha -Ka -Ja -Ea -ka)
echo $kak

mkdir -p $kak

node js/sea.js > vid/$kak

cat1=$(cat vid/$kak)

 for i in $cat1
 do
 echo https://www.youtube.com/watch?v=$i

youtube-dl -f mp4 \
https://www.youtube.com/watch?v=$i

done;

mv *.mp4 $kak

