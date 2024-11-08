#!/bin/bash
yarn clear
cp ./env/staging.env ./.env
echo "\n" >> ./.env
cat ./algolia.env >> ./.env
cp ./env/staging.robots.txt ./static/robots.txt
docusaurus build
cp ./env/staging.CNAME ./build/CNAME
