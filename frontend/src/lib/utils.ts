import { chromium } from "playwright";

export async function fetchEpicPrice(gameName: string) {
  let price = 0;
  const url = "https://store.epicgames.com";
  const suffix = "/es-ES/p/";
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    // Seteo un userAgent para que no me pida verificacion de humano
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  });
  await context.addCookies([
    {
      name: "egs_age_gate_dob",
      value: "2000-0-1",
      domain: "." + url.replace("https://", ""),
      path: "/",
    },
  ]);
  try {
    const page = await context.newPage();
    await page.goto(url + suffix + gameName);
    const priceElement = await page.$(".css-169q7x3 .css-119zqif");
    if (priceElement) {
      const priceText = await priceElement.innerText();
      const priceMatch = priceText.replace(" US$", "").replace(",", ".");
      if (priceMatch) {
        price = parseFloat(priceMatch);
      }
    } else {
      console.log("No se encontró el precio");
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }

  if (price !== null) {
    console.log("Epic Precio: " + price);
    return price * 100;
  }
}

export async function fetchSteamPrice(id: string) {
  let price;
  const url = "https://store.steampowered.com";
  const suffix = "/app/";
  const browser = await chromium.launch({
    headless: true,
  });
  const context = await browser.newContext({
    // Seteo un userAgent para que no me pida verificacion de humano
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  });
  await context.addCookies([
    {
      name: "lastagecheckage",
      value: "01-January-2000",
      domain: "store.steampowered.com",
      path: "/",
    },
    {
      name: "wants_mature_content",
      value: "1",
      domain: "store.steampowered.com",
      path: "/app/" + id,
    },
    {
      name: "birthtime",
      value: "2000-01-01T00:00:00.000Z",
      domain: "store.steampowered.com",
      path: "/",
    },
  ]);
  try {
    const page = await context.newPage();
    await page.goto(url + suffix + id, { waitUntil: "domcontentloaded" });
    try {
      price = await page.$eval(".game_purchase_price.price", (element) => {
        return element.getAttribute("data-price-final");
      });
      if (!price) {
        price = await page.$eval(
          ".discount_block.game_purchase_discount",
          (element) => {
            return element.getAttribute("data-price-final");
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }
  if (!price) {
    price = "0";
  }
  console.log("Steam Price: ", parseInt(price) / 100);
  return price;
}
