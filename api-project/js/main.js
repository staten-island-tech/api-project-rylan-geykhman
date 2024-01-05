  const DOMSelectors = {
    higherButton: document.querySelector(".higherButton"),
    lowerButton: document.querySelector(".lowerButton"),
    nextButton: document.querySelector(".nextButton"),
    container: document.querySelector(".container"),
  }

  let points = 0;

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
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${symbol1}.json`
    );
    let res2 = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${symbol2}.json`
    );
    let data1 = await res1.json();
    let data2 = await res2.json();
    console.log(data1, data2);
    console.log(symbol1, symbol2);
    DOMSelectors.higherButton.addEventListener("click", function (event){
      event.preventDefault()
      if (data1[symbol1].usd>data2[symbol2].usd){
        console.log([symbol1],"is greater! You're right!")
        console.log([symbol1],"has a value of ",data1[symbol1].usd,"in USD, while ",[symbol2],"has a value of ",data2[symbol2].usd,"in USD.");
        counter += 1;
        console.log("Your score is:", counter)
        DOMSelectors.container.innerHTML = "";
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<button class="nextButton" id="button">Next!</button>`
        )
      } else if (data1[symbol1].usd<data2[symbol2].usd) {
        console.log([symbol1],"is lower. You're wrong...")
        console.log([symbol1],"has a value of ",data1[symbol1].usd,"in USD, while ",[symbol2],"has a value of ",data2[symbol2].usd,"in USD.");
        console.log("Your score was:", counter)
        counter -= counter
        console.log("back to ", counter);
        DOMSelectors.container.innerHTML = "";
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<button class="nextButton" id="button">Next!</button>`
        )
      }})
    DOMSelectors.lowerButton.addEventListener("click", function (event){
      event.preventDefault()
      if (data1[symbol1].usd>data2[symbol2].usd){
        console.log([symbol1],"is greater. You're wrong...!")
        console.log([symbol1],"has a value of ",data1[symbol1].usd,"in USD, while ",[symbol2],"has a value of ",data2[symbol2].usd,"in USD.");
        console.log("Your score was:", counter)
        counter -= counter
        console.log("back to ", counter);
        DOMSelectors.container.innerHTML = "";
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<button class="nextButton" id="button">Next!</button>`
        )
      } else if (data1[symbol1].usd<data2[symbol2].usd) {
        console.log([symbol1],"is lower! You're right!")
        console.log([symbol1],"has a value of ",data1[symbol1].usd,"in USD, while ",[symbol2],"has a value of ",data2[symbol2].usd,"in USD.");
        counter += 1;
        console.log("Your score is:", counter)
        DOMSelectors.container.innerHTML = "";
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `<button class="nextButton" id="button">Next!</button>`
        )
        }})}
      /* DOMSelectors.nextButton.addEventListener("click", function (event){
          event.preventDefault()
          DOMSelectors.container.innerHTML = "";
          DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `<button class="higherButton" id="button">Higher!</button>
            <button class="lowerButton" id="button">Lower!</button>`
          )
          getRandom()
      })} */
  
  getRandom()

  //write function that converts both currencies into USD, then compares which one is worth more.

  //utilize function compare after someone guesses if currency x is higher or lower than currency y.
  //if person selects higher, check if x > y. if x > y, they are correct! if x < y, they are wrong
  //if person selects lower, check if x < y. if x < y, they are correct! if x > y, they are wrong
  //if person is correct, then display "Correct!", then the values of both currencies. add 1 to the counter, and give a button to go to the next one. Splice to remove the first one, and generate a new one
  //if person is wrong, display "Womp Womp", then the values of both currencies. show score, then give a button to replay. when replaying, reset score.