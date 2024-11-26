#!/bin/bash
yarn clear
cp ./env/development.env ./.env
cat ./algolia.env >> ./.env
cp ./env/development.robots.txt ./static/robots.txt
docusaurus build
# cp ./env/development.CNAME ./build/CNAME
