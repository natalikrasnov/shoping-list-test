const functions = require("firebase-functions");
import "../src/index.js";

const express = require("express");
const server = express();
server.get("/some-data", (request, response) => {
  response.send("Hello world");
});
exports.app = functions.https.onRequest(server);

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
