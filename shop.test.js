import Shop from './shop';

let shopInstance;

beforeEach(() => {
    shopInstance = Shop();
});

describe('should return current balance and stock', () => {
    test('buyCoffee', () => {
        const initialBalance = shopInstance.getBalance();
        const initialCoffeeStock = shopInstance.getCoffeeStock();
        const quantityBuyCoffee = 10;
        const cost = shopInstance.buyCoffee(quantityBuyCoffee);

        expect(shopInstance.getBalance()).toBe(initialBalance - cost);
        expect(shopInstance.getCoffeeStock()).toBe(initialCoffeeStock + quantityBuyCoffee);

    });
});

describe("sellCoffee", () => {
    it("should decrease coffee quantity and  balance", () => {
        const initialBalance = shopInstance.getBalance();
        const initialCoffeeStock = shopInstance.getCoffeeStock();
        const quantityBuyCoffee = 10;
        shopInstance.buyCoffee(quantityBuyCoffee);
        const quantitySellCoffee = 5;
        shopInstance.sellCoffee(quantitySellCoffee);
        expect(shopInstance.getBalance()).toBe(initialBalance - (quantityBuyCoffee * 1) + quantitySellCoffee);
        expect(shopInstance.getCoffeeStock()).toBe(initialCoffeeStock + quantityBuyCoffee - quantitySellCoffee);
    });
});


describe('should throw error in sellCoffee', () => {
    test('sellCoffee', () => {
        expect(() => {
            shopInstance.buyCoffee(1000);
        }).toThrow('Not enough money to buy');
    });
});


describe('should return the current balance', () => {
    test('getBalance', () => {
        expect(shopInstance.getBalance()).toBe(200);
        shopInstance.buyCoffee(10);
        expect(shopInstance.getBalance()).toBe(190);
    });
});

describe('should return the current coffee stock', () => {
    test('getCoffeeStock', () => {
        expect(shopInstance.getCoffeeStock()).toBe(0);
        shopInstance.buyCoffee(10);
        expect(shopInstance.getCoffeeStock()).toBe(10);
    });
});

describe('should return the total number of coffees sold', () => {
    test('getCoffeeSold', () => {
        expect(shopInstance.getCoffeeSold()).toBe(0);
        shopInstance.buyCoffee(10);
        shopInstance.sellCoffee(3);
        expect(shopInstance.getCoffeeSold()).toBe(3);
    });
});






