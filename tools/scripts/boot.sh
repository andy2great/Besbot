#!/bin/bash

docker image prune -a -f
docker-compose pull && docker-compose up

