const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/", async (req, res) => {
  let confirmed = { success: true };
  try {
    res.status(200).json(confirmed);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await db("recipes");
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = server;
