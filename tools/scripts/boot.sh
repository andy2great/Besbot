#!/bin/bash

cd /home/ubuntu/Besbot/tools/scripts/
docker image prune -a -f
docker-compose pull && docker-compose up -d

echo "test it should be present #2"