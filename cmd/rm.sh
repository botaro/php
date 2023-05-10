
if test -z $1;then echo $0;else
r=${1^}
echo $r

rm -r sol/$1.sol
rm cnf/$1.json

rm -r art/sol/$1.sol/

fi
