key=$(node js/key.js)
echo $key
rep=$(echo $key|sed s/\ /-/g)
echo $rep
kak=$(echo $rep|kakasi -i utf8 -Ha -Ka -Ja -Ea -ka)
echo $kak

node js/sea.js > vid/$kak

cat1=$(cat vid/$kak)
echo $cat1

 for i in $cat1
 do
 echo https://www.youtube.com/watch?v=$i

# youtube-dl -f mp4 \
youtube-dl --extract-audio --audio-format mp3 \
https://www.youtube.com/watch?v=$i

 done;

mkdir -p $kak
mv *.mp3 $kak

