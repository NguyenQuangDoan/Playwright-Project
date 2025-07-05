import { test, expect } from "./fixtures/auth.fixture";

test("Delete booking", async ({ request, token, bookingId }) => {
  
  const response = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    }
  );
  expect(response.status()).toBe(201);

  const check = await request.get(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`
  );
  expect(check.status()).toBe(404);
});
