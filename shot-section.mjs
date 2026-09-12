// Capture a single element by selector — full-page stitching is unreliable on very
// tall pages, so section-level shots are the reliable way to QA below the fold.
import puppeteer from "puppeteer";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const [, , selector, label, ...rest] = process.argv;
const mobile = rest.includes("--mobile");
const OUT = join(process.cwd(), "temporary screenshots");
mkdirSync(OUT, { recursive: true });

const b = await puppeteer.launch({ headless: "new" });
const p = await b.newPage();
await p.setViewport(
  mobile
    ? { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }
    : { width: 1440, height: 900, deviceScaleFactor: 2 },
);
await p.goto("http://localhost:3000", { waitUntil: "networkidle0" });
await p.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));

const el = await p.$(selector);
if (!el) throw new Error(`selector not found: ${selector}`);
await el.scrollIntoView();
await new Promise((r) => setTimeout(r, 400));

const file = join(OUT, `section-${label}${mobile ? "-mobile" : ""}.png`);
await el.screenshot({ path: file });
await b.close();
console.log(file);
