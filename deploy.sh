#!/bin/sh
set -e

if [ -z "$1" ]
then
  echo "ERROR: No Deployment Endpoint Specified"
  exit 1
else
  echo "ENDPOINT: $1"
fi

endpoint="root@$1"
scpEndpoint="$endpoint:app.tar.gz"
tar -zcf app.tar.gz dist node_modules
scp -o StrictHostKeyChecking=no app.tar.gz $scpEndpoint
ssh -oStrictHostKeyChecking=no $endpoint "forever stopall && rm -rf /opt/app && mkdir -p /opt/app && tar -xf app.tar.gz -C /opt/app && rm app.tar.gz && cd /opt && sh start.sh"
