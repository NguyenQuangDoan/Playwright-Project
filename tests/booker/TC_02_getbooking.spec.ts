import { test, expect } from "./fixtures/auth.fixture";
import { z } from 'zod';

test("Get booking ids", async ({ request}) => {
  const response = await request.get('https://restful-booker.herokuapp.com/booking')
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    const bookingSchema = z.array(z.object({
        bookingid: z.number()
    }
    ));

    expect(() => bookingSchema.parse(responseBody)).not.toThrow();
});

test('Get booking by id', async ({ request, bookingId  }) => {
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`)
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