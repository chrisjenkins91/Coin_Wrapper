//Define variables for the rolls of coins
let pennies = .01;
let nickels = .05;
let dimes = .10;
let quarters = .25;
let totalCoins = 300
let coin = 1;

//This is the calculations to get the total value of each coin in dollar amounts by multiplying the number of total amount coins times the value of the coin.

let rollOfPenniesValue = pennies * totalCoins;
let rollOfNickelsValue = nickels * totalCoins;
let rollOfDimesValue = dimes * totalCoins;
let rollOfQuartersValue = quarters * totalCoins;


//Next process is to get the total value of all the roll of coins.

let totalValueOfCoins = rollOfPenniesValue + rollOfNickelsValue + rollOfDimesValue + rollOfQuartersValue;

//How many coins are in each wrapper

let pennyWrapper = coin * 50;
let nickelWrapper = coin * 40;
let dimesWrapper = coin * 50;
let quartersWrapper = coin * 40;

let pennyAmountWrapped = Math.floor(totalCoins / pennyWrapper);
let nickelAmountWrapped = Math.floor(totalCoins / nickelWrapper);
let dimesAmountWrapped = Math.floor(totalCoins / dimesWrapper);
let quarterAmountWrapped = Math.floor(totalCoins / quartersWrapper);

let penniesLeft = totalCoins % pennyWrapper
let nickelsLeft = totalCoins % nickelWrapper
let dimesLeft = totalCoins % dimesWrapper
let quartersLeft = totalCoins % quartersWrapper

console.log(`Pennies can be wrapped ${pennyAmountWrapped} with a remainder of ${penniesLeft}`)
console.log(`Nickels can be wrapped ${nickelAmountWrapped} amount of times with a remainder of ${nickelsLeft}`)
console.log(`Dimes can be wrapped ${dimesAmountWrapped} with a remainder of ${dimesLeft}`)
console.log(`Quarter can be wrapped ${quarterAmountWrapped} with a remainder of ${quartersLeft}`)
console.log(`The total value of the coins is ${totalValueOfCoins}!!`);