
cd ppcandy
for i in *.mp4
do
    shr=${i: -10}

    ffmpeg -y -i "$i" -t 15 -strict -2 \
        ../shr/$shr
done

