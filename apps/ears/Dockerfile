FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

ENV host_brain='besbox-brain'

COPY ./node_modules ./node_modules
COPY ./dist/apps/ears .

CMD node ./main.js