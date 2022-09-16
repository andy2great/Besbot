FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

COPY ./dist/apps/version .

FROM base as build

COPY . .

EXPOSE 8080

CMD node ./main.js