while read name;
do
echo "delete from linux where rowid=$name;"
done < null > sql/del.sql
