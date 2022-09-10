use std::env;

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> String {
    return env::var("VERSION").unwrap_or("none".to_string());
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}