# chat-app

This is a simple chat app created with ReactJS, socket.io and Express.

## Required Features

- [x] List messages in a message box (current user on the right others on the left side)
- [x] Display sending time of the message
- [x] Send a message to everyone in the room
- [x] Send an image as a message
- [x] Settings for time display
- [x] Settings for Cmd + Enter usage from keyboard
- [x] Users can change user name
- [x] Save settings in local storage
- [x] Reset default settings

## Extra Features

- [x] Show info message when a user join the room 
- [x] Show info message when a user leave the room
- [x] Show info message when a user changed his/her name

## Usage

You should have nodejs and npm installed on your machine.

### Download the packages

```
npm install
```

### Run app in your local environment

In project root, to start the client side of the application:

```
npm run build:dev && npm start
```

In project root, to start the server:

```
npm run start-server
```
Optionally specify a port by supplying the `PORT` env variable.

And point your browser to `http://localhost:8080`.

After that, point a new browser tab to `http://localhost:8080` too.

Now you are free to send some messages to other users who coneected the room already :)

### For optimized production build

```
npm run build
```

### Run the tests

```
npm run test
```
