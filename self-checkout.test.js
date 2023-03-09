const { basket, scan, addItem } = require("./self-checkout");

const catalogue = [
    {
        name: 'apple',
        barcode: 123,
        price: 5,
    },
    {
        name: 'banana',
        barcode: 456,
        price: 6
    },
    {
        name: 'orange',
        barcode: 789,
        price: 7,
    },
    {
        name: 'pineapple',
        barcode: 5367,
        price: 80,
    },
    {
        name: 'kiwi',
        barcode: 765,
        price: 25,
    }
]


describe("basket", () => {
    test("is an array", () => {
        expect(Array.isArray(basket)).toBe(true);
    });
});

describe("scan", () => {
    test("takes in a barcode and a catalogue and returns a product's details", () => {
        const barcode = catalogue[3].barcode;

        expect(scan(barcode, catalogue)).toEqual(catalogue[3]);
    });
});

describe("addItem", () => {
    const apple = catalogue[0];

    test("adds an item to the basket", () => {
        expect(basket).toHaveLength(0);
        
        addItem(apple)

        expect(basket).toHaveLength(1);
        expect(basket.includes(apple)).toBe(true);
    });
});