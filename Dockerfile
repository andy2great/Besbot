FROM node:16-alpine as base

WORKDIR /app/
COPY package.json /app/
RUN npm i

FROM base as build

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "run", "serve:version"] 