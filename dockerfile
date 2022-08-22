FROM --platform linux/arm/v7 denoland/deno:alpine

EXPOSE 8000
WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

COPY . .
RUN deno cache ./projects/app.ts


CMD ["deno", "run", "--allow-net", "./projects/app.ts"]