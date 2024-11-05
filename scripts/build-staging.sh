#!/bin/bash
export NODE_ENV=staging
echo "Building docs with NODE_ENV=$NODE_ENV"
cp ./env/.staging.env ./.env
docusaurus build
