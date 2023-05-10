p=$(pwd)
d=${p: -3}
echo $d

url=git@github.com:botaro/$d.git


git remote set-url origin $url 

# git remote add origin git@github.com:botaro/$1.git
git config remote.origin.url
