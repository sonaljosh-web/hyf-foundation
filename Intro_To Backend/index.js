import express from "express";
import { currentYear } from "./exercise1.js";
import knexLibrary from "knex";
import path from "path";

const app = express();
app.use(express.static("public"));
const dbFile = "./tasks.sqlite3";
const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: dbFile,
  },
  useNullAsDefault: true,
});
/*
app.get("/", (req, res) => {
  res.send("Hello! Welcome to my first backend server!");
});*/
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./public" });
});
app.get("/about", (req, res) => {
  res.send("This is my about page!");
});
app.get("/currentYear", (req, res) => {
  res.send(currentYear());
});
app.get("/user-count", async (req, res) => {
  const result = await knex("user").count({ count: "id" }).first();

  res.json({
    count: Number(result.count),
  });
});
app.get("/training", (req, res) => {
  res.send("Work in progress for Training Page!");
});
app.get("/services", (req, res) => {
  res.send("Work in progress for Services Page!");
});
app.get("/contact", (req, res) => {
  res.send("Work in progress for Contact Page!");
});
app.listen(3001, function () {
  console.log(`> Ready on http://localhost:3001`);
});
