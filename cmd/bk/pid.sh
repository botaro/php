key=$(node js/key.js)
#echo $key
touch res/$key
node js/pid.js > pid/$key

cat1=$(cat res/$key)

for i in $cat1
do
echo https://www.youtube.com/playlist?list=$i

youtube-dl -cit --extract-audio --audio-format mp3 \
https://www.youtube.com/playlist?list=$i

done;

mkdir -p $key
mv *.mp3 $key/

