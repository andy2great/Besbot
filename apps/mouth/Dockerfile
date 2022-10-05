FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

EXPOSE 80
ENV port=80
ENV host_brain='besbox-brain'

COPY ./node_modules ./node_modules
COPY ./dist/apps/mouth .

CMD node ./main.js