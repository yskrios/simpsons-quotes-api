import { quoteController } from "../controller/quote.controller";
import { Router } from "express";

export const quoteRouter = Router();

quoteRouter.get("/", (req, res) => {
  const quotes = quoteController.getQuotes();

  res.json(quotes);
});
