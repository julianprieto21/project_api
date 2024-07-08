import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";
const HOST = process.env.HOST || 8080;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  // experimental: {
  //   actions: true,
  // },
  adapter: node({
    mode: "standalone",
    hostname: HOST,
    port: 8080,
  }),
});
