source_folder=./docs;
for entry in $(find $source_folder -iname "*.md")
do
    # extract just the filename
    filename="${entry##*/}"
    filename="${entry}"
    echo $filename
    npx docusaurus write-heading-ids $filename
done
