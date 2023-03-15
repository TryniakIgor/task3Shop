const Shop = function () {
    var balance = 200;
    let coffeePrice = 1;
    let coffeeQuantity = 0;
    let coffeeSold = 0;
    let waterPrice = 2;
    let waterQuantity = 0;
    let waterSold = 0;


    function sellCoffee(n) {
        if (coffeeQuantity >= n) {
            coffeeQuantity -= n;
            coffeeSold += n;
            balance += n * coffeePrice;
            console.log('ssssss', balance);
            console.log(`Sold ${n} coffees for a total of ${n * coffeePrice} UAH.`);
        } else {
            console.log(`Not enough coffee in stock to sell ${n} coffees.In stock ${coffeeQuantity} pcs.`);
        }
    }

    function buyCoffee(n) {
        if (balance >= n * coffeePrice) {
            coffeeQuantity += n;
            balance -= n * coffeePrice;
            console.log('bbbbb', balance);
            console.log(`Bought ${n} coffees for a total cost of ${n * coffeePrice} UAH.`);
            return n * coffeePrice;
        } else {
            console.log(`Not enough money to buy. Balance ${balance}. Required ${n * coffeePrice}. Must be added ${(n * coffeePrice) - balance} UAH`)
            throw { name: "NotMoneyError", message: "Not enough money to buy" };
        }
    }

    function sellWater(n) {
        if (waterQuantity >= n) {
            waterQuantity -= n;
            waterSold += n;
            balance += n * waterPrice;
            console.log(`Sold ${n} waters for a total of ${n * waterPrice} UAH.`);
        } else {
            console.log(`Not enough water in stock to sell ${n} waters. In stock ${waterQuantity} pcs.`);
        }
    }

    function buyWater(n) {
        if (balance >= n * waterPrice) {
            waterQuantity += n;
            balance -= n * waterPrice;
            console.log(`Bought ${n} waters for a total cost of ${n * waterPrice} UAH.`);
            return n * waterPrice;
        } else
            console.log(`Not enough money to buy. Balance ${balance} UAH. Required ${n * waterPrice} UAH. Must be added ${(n * waterPrice) - balance} UAH`)

    }

    function getCoffeeStock() {
        console.log(`Coffee quantity ${coffeeQuantity} pcs`);
        return coffeeQuantity;
    }

    function getCoffeeSold() {
        console.log(`Coffee sold  ${coffeeSold} pcs`)
        return coffeeSold;
    }

    function getWaterStock() {
        console.log(`Water quantity ${waterQuantity} pcs`);
        return waterQuantity;
    }

    function getWaterSold() {
        console.log(`Water sold  ${waterSold} pcs`)
        return waterSold;
    }

    function getBalance() {
        console.log(`Balance is ${balance} UAH.`);
        return balance;

    }

    function calculateTotal() {
        console.log(`Goods in cash equivalent ${(coffeePrice * coffeeQuantity) + (waterPrice * waterQuantity)} UAH.`)
        return (coffeePrice * coffeeQuantity) + (waterPrice * waterQuantity);
    }


    return {
        total: calculateTotal,
        getBalance: getBalance,
        sellCoffee: sellCoffee,
        buyCoffee: buyCoffee,
        sellWater: sellWater,
        buyWater: buyWater,
        getCoffeeStock: getCoffeeStock,
        getCoffeeSold: getCoffeeSold,
        getWaterStock: getWaterStock,
        getWaterSold: getWaterSold
    }
};

const shop = Shop();

// shop.getBalance();
// shop.total();
// shop.buyCoffee(10);
// shop.sellCoffee(5);
// shop.getBalance();
// shop.getCoffeeStock();
// shop.buyWater(50)

// shop.getWaterStock();
// shop.total();
// shop.getBalance();



// shop.getCoffeeStock();
// shop.getCoffeeSold();

// shop.sellWater(10);
// shop.getWaterStock();
// shop.getWaterSold();

// shop.total();
// shop.getBalance();

// shop.sellCoffee(500);
// shop.buyWater(500);

//const v = shop.buyCoffee(333);
//console.log('ddd', v)
module.exports = Shop;