FROM rust:1-alpine3.16 as build

COPY . .

RUN cargo build --release

CMD ["./target/release/besbox"]