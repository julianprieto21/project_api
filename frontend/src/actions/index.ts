import { defineAction, z } from "astro:actions";
import bcrypt from "bcrypt";

export const server = {
  signin: defineAction({
    accept: "form",
    input: z.object({
      user: z.string(),
      email: z.string(),
      password: z.string(),
    }),
    handler: async ({ user, email, password }) => {
      const hashedPass = await bcrypt.hash(
        password,
        parseInt(import.meta.env.SALT_ROUNDS)
      );
      const hashedEmail = await bcrypt.hash(
        email,
        parseInt(import.meta.env.SALT_ROUNDS)
      );
      const data = {
        name: user,
        email: hashedEmail,
        password: hashedPass,
      };
      const options = {
        method: "POST",
        headers: {
          accept: "application/ld+json",
          "Content-Type": "application/ld+json",
        },
        body: JSON.stringify(data),
      };
      fetch(`${import.meta.env.PUBLIC_DATABASE_URL}/api/users`, options)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
      return;
    },
  }),
  login: defineAction({
    accept: "form",
    input: z.object({
      user: z.string(),
      password: z.string(),
    }),
    handler: async ({ user, password }) => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/ld+json",
        },
      };
      const response = await fetch(
        `${import.meta.env.PUBLIC_DATABASE_URL}/api/users`,
        options
      );
      const data = await response.json();
      const userData = data["hydra:member"][0];
      const isPasswordCorrect = await bcrypt.compare(
        password,
        userData.password
      );
      const isUserCorrect = user === userData.name;
      if (isPasswordCorrect && isUserCorrect) {
        return [true, userData.name];
      }
      return [false, "Error de logueo"];
    },
  }),
};
