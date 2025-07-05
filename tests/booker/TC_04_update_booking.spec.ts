import { test, expect } from "./fixtures/auth.fixture";

test("Update booking", async ({ request, token, bookingId }) => {

  const updatedBooking = {
    firstname: "James",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  const response = await request.put(
    `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Cookie': `token=${token}`
    },
      data: updatedBooking,
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody).toEqual(updatedBooking);
});
