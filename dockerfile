FROM lukechannings/deno:v1.24.3

EXPOSE 8000
WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

COPY . .
RUN deno cache ./projects/app.ts

CMD ["run", "--allow-net", "./projects/app.ts"]