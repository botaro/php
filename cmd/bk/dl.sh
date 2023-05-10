
# cat1=$(cat $1)

# for i in $cat1
# do
# echo https://www.youtube.com/watch?v=$i

# youtube-dl --extract-audio --audio-format mp3 \
# https://www.youtube.com/watch?v=$i

# done;

url=https://www.youtube.com/results?search_query=the+burger+show
url=https://www.youtube.com/playlist?list=PLAzrgbu8gEMJe0ZOKPLRgEc-sp4cLmtz6
url=https://www.youtube.com/watch?v=th5QV1mnWXo&list=PLAzrgbu8gEMJkq1iErnBrByYC69XCxgov
url=https://www.youtube.com/playlist?list=PLAzrgbu8gEMKoPLk9xZkrrxyznk2SJQ3B

youtube-dl $url
