FROM arm32v7/node:18-buster-slim as base

WORKDIR /app/
COPY package.json /app/
RUN npm i --omit=dev

FROM base as build

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "run", "serve:version"] 