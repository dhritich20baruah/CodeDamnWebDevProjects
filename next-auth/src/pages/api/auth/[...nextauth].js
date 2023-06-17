// import NextAuth, {NextAuthOptions} from "next-auth/next"
// import GoogleProvider from "next-auth/providers/google"
// import CredentialsProvider from "next-auth/providers/credentials";

// const authOptions = {
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         CredentialsProvider({
//             type: 'credentials',
//             credentials: {},
//             authorize(credentials, req){
//                 const {email, password} = credentials;

//                 if(email !== 'dhriti@email.com' || password !== "123"){
//                     return null
//                 }

//                 return {id: '1234', name: 'Dhriti', email: 'dhriti@email.com'}
//             }
//         })
//     ], 
//     pages: {
//         signIn: "/Login"
//     }
// }

// export default NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET
//         })
//     ],
//     secret: process.env.JWT_SECRET
// }, authOptions)


