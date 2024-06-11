import type { APIRoute } from "astro";
import { fetchEpicPrice } from "../../lib/utils";

export const GET: APIRoute = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const gameName = url.searchParams
    .get("game")
    ?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
  console.log("Buscando el precio de", gameName);

  if (!gameName) {
    return new Response("gameName is a required parameter", { status: 400 });
  }

  try {
    const price = await fetchEpicPrice(gameName);
    return new Response(JSON.stringify({ price }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    return new Response(err.message, { status: 400 });
  }
};
