FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

COPY ./node_modules ./node_modules
COPY ./dist/apps/ears .

CMD node ./main.js