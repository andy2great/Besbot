FROM denoland/deno:alpine

EXPOSE 8000
WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

COPY . .
RUN deno cache ./projects/app.ts

CMD ["deno", "run", "./projects/app.ts"]