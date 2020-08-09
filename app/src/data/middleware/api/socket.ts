import socketio from "socket.io-client";

import type { SendContent, ReadCheck, User, SocketError } from "./apiTypes";
import { getItemToSesstion } from "utils/stroage";
import { baseURL } from "./currentURL";

const socket = socketio(baseURL, {
  transports: ["websocket"],
  query: `auth_token=${getItemToSesstion("access_token")}`,
});

export const sendMessage = (data: SendContent) => {
  socket.emit("new message", data);
};

export const readCheck = (readCheck: ReadCheck) => {
  socket.emit("read check", readCheck);
};

export const listenOnReceiveMessage = (listener: (user: User) => void) => {
  socket.on("receive message", listener);
};

export const listenOnReceiveReadCheck = (
  listener: (readCheck: string) => void
) => {
  socket.on("receive read check", listener);
};

export const listenOnError = (listener: (error: SocketError) => void) => {
  socket.on("save error", listener);
};
