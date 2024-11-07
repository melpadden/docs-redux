#!/bin/bash
cp ./env/production.env ./.env
cp ./env/production.CNAME ./CNAME
docusaurus build
