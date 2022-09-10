FROM node:16-alpine as base

WORKDIR /app/
COPY package.json /app/
RUN npm i --production

FROM base as build

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "run", "serve:version"] 