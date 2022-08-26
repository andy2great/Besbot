FROM rust:1.49 as build

COPY . .

RUN cargo build --release

# Run the binary
CMD ["./target/release/besbox"]