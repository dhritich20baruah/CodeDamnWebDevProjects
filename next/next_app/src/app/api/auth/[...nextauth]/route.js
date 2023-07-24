// const authOptions = require("@/lib/NextAuth").authOptions
// import NextAuth from "next-auth/next";

// export async function GET() {
//     await NextAuth(authOptions);
// } 
// export async function POST(){
//     await NextAuth(authOptions)
// }

import NextAuth from "next-auth/next"; //This line imports the NextAuth function from the "next-auth/next" module. The NextAuth function is the main function provided by NextAuth.js that handles authentication requests.
import { authOptions } from "@/app/NextAuth";

const handler = (req, res) => NextAuth(req, res, authOptions);
//This code defines a function called handler. The handler function takes in a req (request) and res (response) object, which are the standard request and response objects provided by Next.js API routes. The handler function then calls the NextAuth function with these request and response objects, along with the authOptions object.
module.exports = {
  GET: handler,
  POST: handler,
};
//This code exports an object that defines the API route. The object has two properties, GET and POST, both of which have the value of the handler function. This means that the same handler function will be used to handle both GET and POST requests to the API route.