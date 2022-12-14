# Besbox
## Description
This project is an IoT initiative at Beslogic using their latest AI!



## Goals
To have an interactive device that listen, speaks and display it's emotion through lights, movements.
![Besbox config drawio](https://user-images.githubusercontent.com/22083907/194387513-a4c23393-8def-45fa-96ed-5c4c75b2499e.png)

## Resources to run the project

- Rasberry Pi 3b+

## Technologies
- NX Monorepo
- NodeJS (hardware)
- Mosquitto (Pub/Sub)

## What was achieved
- Auto update on reboot
- Versioning
- Text to speech
- Auto deployment
- Interaction between docker and host machine

## Roadmap
- Adding voice interface for the user to communicate with the device
- Question asked by the user to be transformed into answer using Beslogic API
- Attach wheel to the robot to move around
- Add visual presentation to show emotions (emotions retrieved from the API)
- Adding a brain to interact between parts of the robot

# Setup
## Hardware setup
1. Ubuntu 22 on rasberry pi 3b+
2. Install docker-compose
3. Setup rasberry pi with the setup file under the /tools/scripts folder
4. Reboot hardware

## Dev setup
- Install visual studio
- Install NX extension
- npm install
- npm start
