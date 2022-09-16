#!/bin/bash

cd /home/ubuntu/Besbot/tools/scripts/
git pull
docker image prune -a -f
docker-compose pull && docker-compose up -d

echo "test it should be present #2"