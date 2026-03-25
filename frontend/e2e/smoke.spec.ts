import { expect, test } from "@playwright/test";

const demoEmail =
  process.env.PLAYWRIGHT_DEMO_EMAIL ?? "demo@nextjs-go-kit.local";
const demoPassword = process.env.PLAYWRIGHT_DEMO_PASSWORD ?? "demo12345";

test.describe("imagilab smoke flows", () => {
  test("renders the public site pages", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: "Imagi.lab",
        exact: true,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Get Started!" }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "About Us" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Our Services" }),
    ).toBeVisible();

    await page.goto("/sandbox");

    await expect(
      page.getByRole("heading", {
        name: "Component Gallery",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", {
        name: "Buttons",
      }),
    ).toBeVisible();

    await page.goto("/templates/client-onboarding-kit");

    await expect(page).toHaveURL(/\/templates\/client-onboarding-kit$/);
    await expect(page.getByRole("link", { name: "Back home" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Open sandbox" }),
    ).toBeVisible();

    await page.goto("/dashboard");

    await expect(
      page.getByRole("heading", {
        name: "Preview the private workspace before wiring login.",
      }),
    ).toBeVisible();
    await expect(page.getByText("Public demo")).toBeVisible();

    await page.goto("/collections");

    await expect(
      page.getByRole("heading", {
        name: "The page you asked for is not part of this starter.",
      }),
    ).toBeVisible();

    await page.goto("/create-resource");

    await expect(
      page.getByRole("heading", {
        name: "The page you asked for is not part of this starter.",
      }),
    ).toBeVisible();
  });

  test("logs in with the demo account and opens the owner dashboard", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.getByLabel("Email").fill(demoEmail);
    await page.getByLabel("Password").fill(demoPassword);
    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/\/$/);

    await page.goto("/dashboard");

    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByText("Owner Dashboard")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Session Overview" }),
    ).toBeVisible();
    await expect(page.getByText(demoEmail)).toBeVisible();
  });
});
