  const DOMSelectors = {
    button: document.querySelector(".button"),
    container: document.querySelector(".container"),
  }

  const theTrueArray = []

  async function getRandom() {
    let theCurrency = await fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
    )
    let theData = await theCurrency.json();
    const currencyValues = []
    for (const currencies in theData) {
      currencyValues.push(currencies)
    }
    let currency1 = Math.floor(Math.random() * currencyValues.length);
    let currency2 = Math.floor(Math.random() * currencyValues.length);
    let res1 = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyValues[currency1]}.json`
    );
    let res2 = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currencyValues[currency2]}.json`
    );
    let data1 = await res1.json();
    let data2 = await res2.json();
    theTrueArray.push(data1);
    theTrueArray.push(data2);
    console.log(theTrueArray)
    DOMSelectors.button.addEventListener("click", async function (event){
      event.preventDefault()
      if (theTrueArray[0].currency1>theTrueArray[1].currency2){
        console.log("yippee!")
      } else {
        console.log("nay")
        console.log(theTrueArray[0],theTrueArray[1])
        console.log(currency1)
      }
  
    })
    }

  getRandom()

  function compare(arr){
    if (arr[0].currency1>arr[1].currency2){
      console.log("yippee!")
    } else {
      console.log("nay")
      console.log(arr[0],arr[1])
      console.log(currency1)
    }
  }
  //write function that converts both currencies into USD, then compares which one is worth more.

  //utilize function compare after someone guesses if currency x is higher or lower than currency y.
  //if person selects higher, check if x > y. if x > y, they are correct! if x < y, they are wrong
  //if person selects lower, check if x < y. if x < y, they are correct! if x > y, they are wrong
  //if person is correct, then display "Correct!", then the values of both currencies. add 1 to the counter, and give a button to go to the next one. Splice to remove the first one, and generate a new one
  //if person is wrong, display "Womp Womp", then the values of both currencies. show score, then give a button to replay. when replaying, reset score.