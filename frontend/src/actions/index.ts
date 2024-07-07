// import { defineAction, z } from "astro:actions";
// import bcrypt from "bcryptjs";

// export const server = {
//   signin: defineAction({
//     accept: "form",
//     input: z.object({
//       user: z.string(),
//       email: z.string(),
//       password: z.string(),
//     }),
//     handler: async ({ user, email, password }) => {
//       const hashedPass = await bcrypt.hash(password, 10);
//       const hashedEmail = await bcrypt.hash(email, 10);
//       const data = {
//         name: user,
//         email: hashedEmail,
//         password: hashedPass,
//       };
//       const options = {
//         method: "POST",
//         headers: {
//           accept: "application/ld+json",
//           "Content-Type": "application/ld+json",
//         },
//         body: JSON.stringify(data),
//       };
//       const api_url = "https://clownfish-app-daqok.ondigitalocean.app";
//       fetch(`${api_url}/api/users`, options)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return response.json();
//         })
//         .then((data) => console.log("Sign in successful"))
//         .catch((error) => console.error(error));
//       return;
//     },
//   }),
//   login: defineAction({
//     accept: "form",
//     input: z.object({
//       user: z.string(),
//       password: z.string(),
//     }),
//     handler: async ({ user, password }) => {
//       const options = {
//         method: "GET",
//         headers: {
//           accept: "application/ld+json",
//         },
//       };
//       const api_url = "https://clownfish-app-daqok.ondigitalocean.app";
//       const response = await fetch(`${api_url}/api/users`, options);
//       const data = await response.json();
//       const [userData] = data["hydra:member"].filter((u: { name: string }) => {
//         return u.name === user;
//       });
//       const isPasswordCorrect = await bcrypt.compare(
//         password,
//         userData.password
//       );
//       const isUserCorrect = user === userData.name;
//       if (isPasswordCorrect && isUserCorrect) {
//         return [true, userData.name];
//       }
//       return [false, "Error de logueo"];
//     },
//   }),
// };
