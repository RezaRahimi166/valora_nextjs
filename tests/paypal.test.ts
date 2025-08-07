import { generateAccessToken } from "../lib/paypal";

// Test to generate acces token from paypal
test("generates token from paypal", async () => {
  const tokenResponse = await generateAccessToken();
  console.log(tokenResponse);
  expect(typeof tokenResponse).toBe("string");
  expect(typeof tokenResponse.length).toBeGreaterThan(0);
});
