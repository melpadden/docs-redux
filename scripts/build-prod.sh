#!/bin/bash
yarn clear
cp ./env/production.env ./.env
cat ./algolia.env >> ./.env
cp ./env/production.robots.txt ./static/robots.txt
docusaurus build
cp ./env/production.CNAME ./build/CNAME
