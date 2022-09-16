#!/bin/bash

echo "1" > 1.txt
cd /home/ubuntu/Besbot/tools/scripts/
echo "2" > 1.txt
git pull
echo "3" > 1.txt
docker image prune -a -f
echo "4" > 1.txt
docker-compose pull && docker-compose up -d
echo "5" > 1.txt

echo "test it should be present #2"