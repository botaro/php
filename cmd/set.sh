p=$(pwd)
d=${p: -3}
echo $d

url=git@github.com:botaro/$d.git

git remote set-url origin $url

git config remote.origin.url
