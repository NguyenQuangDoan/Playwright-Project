import { test, expect } from "@playwright/test";

test("Update booking", async ({ request }) => {
  const authRes = await request.post(
    "https://restful-booker.herokuapp.com/auth",
    {
      data: { username: "admin", password: "password123" },
    }
  );
  const { token } = await authRes.json();

  const allBookingRes = await request.get('https://restful-booker.herokuapp.com/booking');
  const allBoookings = await allBookingRes.json();
  const allIds = allBoookings.map(booking => booking.bookingid);
  const newestId = Math.max(...allIds) 

  const response = await request.delete(
    `https://restful-booker.herokuapp.com/booking/${newestId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    }
  );
  expect(response.status()).toBe(201);

  const check = await request.get(
    `https://restful-booker.herokuapp.com/booking/${newestId}`
  );
  expect(check.status()).toBe(404);
});
