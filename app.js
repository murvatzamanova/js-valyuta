
const aznToUsd = 0.589; // 1 AZN = 0.589 USD
const aznToEur = 0.501; // 1 AZN = 0.501 EUR

function convertCurrency(amountInAZN) {
    const amountInUSD = amountInAZN * aznToUsd;
    const amountInEUR = amountInAZN * aznToEur;
    return { USD: amountInUSD, EUR: amountInEUR };
}
let amountInAZN = prompt("Eded daxil ed")
console.log(amountInAZN + ' AZN = ' + convertedAmounts.USD.toFixed(2) + ' USD');
console.log(amountInAZN + ' AZN = ' + convertedAmounts.EUR.toFixed(2) + ' EUR');

