import express from "express";
import { createClient } from "redis";
import process from "process";

const app = express();

const client = createClient({
  host: "redis-server",
  port: 6379,
});

//client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, value) => {
    const visits = parseInt(value ?? 0) + 1;
    res.send(`Number of visits is ${visits}`);
    client.set("visits", visits);
  });
});

app.listen(8081, () => {
  console.log("Listening on port 8081");

  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
