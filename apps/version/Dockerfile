FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

EXPOSE 8080
ENV VERSION=1.2.0

COPY ./node_modules ./node_modules
COPY ./dist/apps/version .


CMD node ./main.js