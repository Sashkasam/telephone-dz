/* eslint-disable no-undef */
import telePhone from "../app";

test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
    ['7(912)000-0000','+79120000000']
])('phone number conversion', (number, expected) => {
    expect(telePhone(number)).toEqual(expected);
});