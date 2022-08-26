FROM rust:1.49 as build

COPY . .

RUN cargo build --release

CMD ["./target/release/besbox"]