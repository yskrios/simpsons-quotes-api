import { Quote } from "../models/quote.model";

import data from "../data/quotes.json";

const quotes = data as Quote[];

const getQuotes = (): Quote[] => {
  const shuffledQuotes = quotes
    .map((element) => ({ quote: element, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ quote }) => quote);

  return shuffledQuotes;
};

export const quoteController = {
  getQuotes,
};
