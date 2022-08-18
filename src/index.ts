import express from "express";
import { quoteRouter } from "./routes/quote.route";
import cors from "cors";

const PORT = process.env.PORT || 9001;

const app = express();

app.use(cors());
app.use("/quote", quoteRouter);

app.get("/", (_, res) => {
  res.send("Express Server - Simpsons Quote API");
});

app.listen(PORT, () => {
  console.log("🚀 ~ file: index.ts ~ line 13 ~ app.listen ~ PORT", PORT);
});
