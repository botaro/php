num=1
sox \
    $1 \
    $1.wav \
    silence 1 0.5 1% 1 $num 1% : newfile : restart
