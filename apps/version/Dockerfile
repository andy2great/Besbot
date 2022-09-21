FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

COPY package.json /app/
RUN npm install --omit=dev

EXPOSE 8080
ENV VERSION=1.1.3

COPY ./dist/apps/version .


CMD node ./main.js