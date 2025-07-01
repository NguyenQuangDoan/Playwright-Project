import { test, expect } from "@playwright/test";
import { z } from 'zod';

test("Get booking ids", async ({ request }) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking')
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const bookingSchema = z.array(z.object({
        bookingid: z.number()
    }
    ));

    expect(() => bookingSchema.parse(responseBody)).not.toThrow();
});

test('Get booking by id', async ({ request }) => {
    const response = await request.get('https://restful-booker.herokuapp.com/booking/1')
    expect(response.status()).toBe(200);
    const responseBody = await response.json();

    const bookingSchema = z.object({
        firstname: z.string(),
        lastname: z.string(),
        totalprice: z.number(),
        depositpaid: z.boolean(),
        bookingdates: z.object({
            checkin: z.string(),
            checkout: z.string()
        })    
    });
    expect(() => bookingSchema.parse(responseBody)).not.toThrow();

});