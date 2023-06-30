import { BrowserContext, Page, Locator, Browser, chromium } from "playwright";

describe("Something", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;
  let headerLocator: Locator;
  let value: string | null;

  beforeAll(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("http://localhost:5173");
    headerLocator = page.locator(`//header[@class = "App-header"]`);
  });

  beforeEach(async () => {
    value = await headerLocator.getAttribute("style");
  });

  test("Turquoise test", async () => {
    expect(value).toBe("background-color: rgb(26, 188, 156);");
  });

  test("Red test", async () => {
    await page.click(`text="Red"`)
    expect(value).toBe("background-color: rgb(231, 76, 60);");
  });

  test("Yellow test", async () => {
    await page.click(`text="Yellow"`)
    expect(value).toBe("background-color: rgb(241, 196, 15);");
  });

  afterAll(async () => {
    await context.close();
    await browser.close();
  });
});
