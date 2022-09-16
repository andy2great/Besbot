FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

COPY package.json /app/
RUN npm install --omit=dev

FROM base as build

COPY ./dist/apps/ears .
EXPOSE 8080

CMD node ./main.js