#!/bin/bash
cp ./env/staging.env ./.env
cp ./env/staging.CNAME ./CNAME
docusaurus build
