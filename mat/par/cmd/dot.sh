#!/bin/bash
dir=$(pwd)

if [ -z "$1" ];then
echo "usage"
else
sqlite3 $dir/db/code.db < sql/$1.dot
fi
