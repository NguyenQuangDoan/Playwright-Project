import { test, expect } from "@playwright/test";

test("Get booking ids", async ({ request }) => {
  const bookingData = {
    firstname: "John",
    lastname: "Doe",
    totalprice: 123,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-07-01",
      checkout: "2025-07-10",
    },
    additionalneeds: "Breakfast",
  };

  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: bookingData,
    }
  );
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  expect(responseBody.booking).toEqual(bookingData);
});
