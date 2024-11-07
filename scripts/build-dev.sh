#!/bin/bash
cp ./env/development.env ./.env
cp ./env/development.CNAME ./CNAME
docusaurus build
