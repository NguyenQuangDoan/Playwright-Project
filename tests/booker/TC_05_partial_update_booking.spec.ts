import { test, expect } from "@playwright/test";

test("Partial update booking", async ({ request }) => {
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

  const updatedBooking = {
    firstname: "Curl",
    lastname: "Brown",
  };

  const response = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${newestId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Cookie: `token=${token}`,
      },
      data: updatedBooking,
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.firstname).toEqual(updatedBooking.firstname);
  expect(responseBody.lastname).toEqual(updatedBooking.lastname);
});
