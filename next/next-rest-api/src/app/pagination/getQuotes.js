"use server";
import Quotes from "../model/Quotes";
import dbConnect from "../utils/dbConnect";
dbConnect();

export default async function getQuotes(pageNumber, pageSize) {
  const quotes = await Quotes.find();

  const startIndex = (pageNumber - 1) * pageSize;
  return quotes.slice(startIndex, startIndex + pageSize);
}

export async function quotesLength() {
  const quotes = await Quotes.find();
  return quotes.length;
}
