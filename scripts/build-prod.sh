#!/bin/bash
yarn clear
cp ./env/production.env ./.env
echo " " >> ./.env
cat ./env/prod.algolia.env >> ./.env
cp ./env/production.robots.txt ./static/robots.txt
docusaurus build
cp ./env/production.CNAME ./build/CNAME
