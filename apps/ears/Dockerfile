FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

COPY package.json /app/
RUN npm install --omit=dev

COPY ./dist/apps/ears .

CMD node ./main.js