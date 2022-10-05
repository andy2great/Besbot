FROM arm32v7/node:18-alpine3.15 as base

WORKDIR /app/

EXPOSE 80
ENV port=80
ENV host_brain='besbox-brain'
ENV host_ears='besbox-ears' 
ENV host_mouth='besbox-mouth' 
ENV host_version='besbox-version' 

COPY ./node_modules ./node_modules
COPY ./dist/apps/brain .

CMD node ./main.js