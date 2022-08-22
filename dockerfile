FROM denoland/deno:alpine
EXPOSE 8080
WORKDIR /app
USER deno
COPY deps.ts .
RUN deno cache deps.ts
COPY . .
RUN deno cache projects/app.ts
RUN mkdir -p /var/tmp/log
CMD ["run", "--allow-all", "projects/app.ts"]