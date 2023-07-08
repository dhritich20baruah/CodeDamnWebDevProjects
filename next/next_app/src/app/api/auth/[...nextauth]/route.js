// const authOptions = require("@/lib/NextAuth").authOptions
// import NextAuth from "next-auth/next";

// export async function GET() {
//     await NextAuth(authOptions);
// } 
// export async function POST(){
//     await NextAuth(authOptions)
// }

import NextAuth from "next-auth/next";
import { authOptions } from "@/app/NextAuth";

const handler = (req, res) => NextAuth(req, res, authOptions);

module.exports = {
  GET: handler,
  POST: handler,
};
