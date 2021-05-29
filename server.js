"use strict";

const express = require("express");
const path = require("path");
const compression = require("compression");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.use(compression());

var distDir = path.join(__dirname, "dist", "theme-example");
app.use(express.static(distDir));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "theme-example", "index.html"));
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
