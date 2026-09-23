import express from "express";
import { type Request, type Response } from "express";
import { tickets } from "./tickets";

const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.get("/tickets", (req: Request, res: Response) => {
  res.json(tickets);
});

app.get("/tickets/:id", (req, res) => {
  const id = req.params.id;
  for (let ticket of tickets) {
    if (ticket.id === id) {
      return res.json(ticket);
    }
  }

  return res.status(404).json({ error: "Ticket not found" });
});
app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});
