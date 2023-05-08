#!/bin/bash
dir=$(pwd)

if [ -z "$1" ];then echo "usage"; else

sqlite3 db/php.db < sql/$1.sql

fi
