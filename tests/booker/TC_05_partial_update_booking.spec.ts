import { test, expect } from "./fixtures/auth.fixture";

test("Partial update booking", async ({ request, token, bookingId }) => {

  const updatedBooking = {
    firstname: "Curl",
    lastname: "Brown",
  };

  const response = await request.patch(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
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
