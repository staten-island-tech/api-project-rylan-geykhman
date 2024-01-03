  const DOMSelectors = {
    button: document.querySelector(".button"),
    container: document.querySelector(".container"),
  }

  async function getRandom() {
    let theCurrencies = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    )
    let theData = await theCurrencies.json();
    const currencyValues = []
    for (const currencies in theData) {
      currencyValues.push(currencies)
    }
    let currency1 = Math.floor(Math.random() * currencyValues.length);
    let currency2 = Math.floor(Math.random() * currencyValues.length);
    let symbol1 = currencyValues[currency1];
    let symbol2 = currencyValues[currency2];
    let res1 = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyValues[currency1]}.json`
    );
    let res2 = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyValues[currency2]}.json`
    );
    let data1 = await res1.json();
    let data2 = await res2.json();
    console.log(data1, data2);
    console.log(symbol1, symbol2);
    DOMSelectors.button.addEventListener("click", function (event){
      event.preventDefault()
      if (data1[symbol1].usd>data2[symbol2].usd){
        console.log([symbol1],"is greater!")
        console.log([symbol1],"has a value of ",data1[symbol1].usd,"in USD, while ",[symbol2],"has a value of ",data2[symbol2].usd,"in USD.");
      } else if (data1[symbol1].usd<data2[symbol2].usd) {
        console.log([symbol2],"is greater!")
        console.log([symbol2],"has a value of ",data2[symbol2].usd,"in USD, while ",[symbol1],"has a value of ",data1[symbol1].usd,"in USD.");
      }}
    )
  }
  
  getRandom()

  //write function that converts both currencies into USD, then compares which one is worth more.

  //utilize function compare after someone guesses if currency x is higher or lower than currency y.
  //if person selects higher, check if x > y. if x > y, they are correct! if x < y, they are wrong
  //if person selects lower, check if x < y. if x < y, they are correct! if x > y, they are wrong
  //if person is correct, then display "Correct!", then the values of both currencies. add 1 to the counter, and give a button to go to the next one. Splice to remove the first one, and generate a new one
  //if person is wrong, display "Womp Womp", then the values of both currencies. show score, then give a button to replay. when replaying, reset score.