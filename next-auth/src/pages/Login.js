// import React, {useState} from "react";
// import { useSession, signIn, signOut } from "next-auth/react";

// const Login = () => {
//   const { data: session } = useSession();
//   console.log(session);
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const res = await signIn('credentials', {
//         email: userInfo.email,
//         password: userInfo.password
//     })
//     console.log(res)
//   };

//   if (session) {
//     return (
//       <div>
//         <p>Welcome, {session.user.name}</p>
//         <button
//           className="p-2 font-bold bg-yellow-500 hover:bg-orange-500 hover:text-white"
//           onClick={() => signOut()}
//         >
//           Sign Out
//         </button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="m-10">
//         <p className="font-semibold">You are not signed in.</p>
//         <div className="my-4">
//           <p>Sign In with email</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               value={userInfo.email}
//               onChange={({ target }) =>
//                 setUserInfo({ ...userInfo, email: target.value })
//               }
//               type="email"
//               name="email"
//               id="email"
//               placeholder="email"
//               className="p-3 border-2 border-gray-500 my-3"
//             />
//             <br />
//             <input
//               value={userInfo.password}
//               onChange={({ target }) =>
//                 setUserInfo({ ...userInfo, password: target.value })
//               }
//               type="password"
//               name="password"
//               id="password"
//               placeholder="password"
//               className="p-3 border-2 border-gray-500 my-3"
//             />
//             <br />
//             <button
//               className="bg-yellow-500 hover:bg-orange-500 p-3"
//               type="submit"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//         <div className="my-4">
//           <p className="font-semibold">OR</p>
//           <br />
//           <button
//             className="p-2 font-bold hover:bg-red-500 border-2 border-red-500 hover:text-white text-red-500"
//             onClick={() => signIn()}
//           >
//             Sign In with google
//           </button>
//         </div>
//       </div>
//     );
//   }
// };

// export default Login;
