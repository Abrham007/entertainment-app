// import type { NextAuthOptions } from "next-auth";
// import credentials from "next-auth/providers/credentials";
// import CredentialProvider from "next-auth/providers/credentials";

// export const options: NextAuthOptions = {
//   providers: [
//     CredentialProvider({
//       name: "credentials",

//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "fdsa",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "2322",
//         },
//       },

//       async authorize(credentials) {
//         const user = { email: "test@email", password: "123456" };

//         console.log("here");
//         if (credentials?.password === user.password) {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
// };
