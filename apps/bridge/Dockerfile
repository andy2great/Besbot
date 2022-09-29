FROM node:18-alpine3.15 as base

WORKDIR /app/

EXPOSE 80
ENV port=80

COPY ./node_modules ./node_modules
COPY ./dist/apps/bridge .

CMD node ./main.js