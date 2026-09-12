// Screenshot utility for visual QA.
// Usage: node screenshot.mjs http://localhost:3000 [label] [--mobile]
// Saves auto-incremented PNGs to ./temporary screenshots/ — never overwrites.

import puppeteer from "puppeteer";
import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const url = process.argv[2] ?? "http://localhost:3000";
const args = process.argv.slice(3);
const mobile = args.includes("--mobile");
const viewportOnly = args.includes("--viewport");
const label = args.find((a) => !a.startsWith("--"));

const OUT_DIR = join(process.cwd(), "temporary screenshots");
mkdirSync(OUT_DIR, { recursive: true });

// Auto-increment: find the highest screenshot-N-* already on disk and add one.
const next =
  readdirSync(OUT_DIR)
    .map((f) => Number(f.match(/^screenshot-(\d+)/)?.[1]))
    .filter(Number.isFinite)
    .reduce((max, n) => Math.max(max, n), 0) + 1;

const suffix = [mobile ? "mobile" : null, label].filter(Boolean).join("-");
const file = join(OUT_DIR, `screenshot-${next}${suffix ? `-${suffix}` : ""}.png`);

const browser = await puppeteer.launch({ headless: "new" });
const page = await browser.newPage();

await page.setViewport(
  mobile
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }
    : { width: 1440, height: 900, deviceScaleFactor: 2 },
);

await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });
// Let fonts settle and any entrance animations finish before capturing.
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 600));

await page.screenshot({ path: file, fullPage: !viewportOnly });
await browser.close();

console.log(file);
