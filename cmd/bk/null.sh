#cd $1
mplayer -ao alsa:device=hw=0.0 -vo null "$1"

