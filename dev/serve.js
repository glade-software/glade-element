import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Specify host, port and path for GraphQL endpoint
const port = process.env.PORT || 3080;
const host = process.env.DEV_HOST || "localhost";

const devServerUrl = `http://${host}:${port}`;

const app = express();

app.get("/glade-annotatable.bundled.js", (req, res) => {
  console.log("serving glade");
  res.sendFile(path.join(__dirname, "../dist/glade-annotatable.bundled.js"));
});

app.get("/glade-annotatable.bundled.js.map", (req, res) => {
  console.log("serving glade sourcemap");
  res.sendFile(
    path.join(__dirname, "../dist/glade-annotatable.bundled.js.map")
  );
});

app.get("/", (req, res) => {
  console.log("serving demo page");
  res.sendFile(path.join(__dirname, "./index.html"));
});


const appServer = app.listen({ host, port, path }, () => {
  console.log(`served ${devServerUrl}`);
});
