import { Server } from "@hocuspocus/server";

const server = new Server({
  port: Number(process.env.PORT) || 1234,

  async onConnect(data) {
    console.log("connected", data.documentName);
  },

  async onDisconnect(data) {
    console.log("disconnected", data.documentName);
  },
});

server.listen();

console.log("Hocuspocus running");
