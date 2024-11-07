#!/bin/bash
yarn clear
cp ./env/staging.env ./.env
cat ./env/algolia.env >> ./.env
#cp ./env/staging.CNAME ./CNAME
cp ./env/staging.robots.txt ./staticrobots.txt
docusaurus build
cp ./env/staging.CNAME ./build/CNAME
#cp ./env/staging.robots.txt ./build/robots.txt
