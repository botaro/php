
url=https://api.etherscan.io/api/
adr=$(node js/adr.js)
echo $adr;

curl \
    $url?module=account&action=balance&address=$adr&apikey=$key


