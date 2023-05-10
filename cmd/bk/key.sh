key=$(node js/key.js)
#echo $key
touch res/$key
node js/sea.js > res/$key

cat1=$(cat res/$key)

for i in $cat1
do
echo https://www.youtube.com/watch?v=$i

youtube-dl --extract-audio --audio-format mp3 \
https://www.youtube.com/watch?v=$i

done;

mkdir -p $key
mv *.mp3 $key/

