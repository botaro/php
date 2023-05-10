
url=https://api.etherscan.io/api/
key=$(node js/key.js)
has=$(cat js/has.js)
echo $key;echo $has

curl \
    $url?module=contract&action=getabi&address=$has&apikey=$key


