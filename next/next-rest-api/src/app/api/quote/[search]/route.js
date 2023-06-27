import Quotes from "@/app/model/Quotes";
import dbConnect from "@/app/utils/dbConnect";
import { NextResponse } from "next/server";
dbConnect()

export const GET = async (req, res) => {
    const quote = req.url.split("quote/")[1];
    const convertToLowerCase = (text) => {
        const convertedText = text.replace(/[A-Z]/g, (match) => match.toLowerCase());
        return convertedText;
      };
    const searchTerm = convertToLowerCase(quote)
    let result = await Quotes.find({
        "$or": [
            {
                quote: { $regex: quote}
            },
            {
                quote: { $regex: searchTerm}
            }
        ]
    });
    return NextResponse.json(result)
}