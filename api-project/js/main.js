const DOMSelectors = {
  nextButton: document.querySelector("#nextButton"),
  container: document.querySelector(".container"),
  buttons: document.querySelector(".buttons"),
  text: document.querySelector(".text"),
  score: document.querySelector(".score"),
  values: document.querySelector(".values"),
}

let counter = 0

function hideNextButton() {
  DOMSelectors.nextButton.style.display = "none";
}

function displayNextButton(){
  DOMSelectors.nextButton.style.display = "inline-block";
}

DOMSelectors.nextButton.addEventListener("click", function (event){
  event.preventDefault();
  DOMSelectors.container.innerHTML = '<h4>loading...</h4>';
  DOMSelectors.text.innerHTML = '';
  DOMSelectors.score.innerHTML = '';
  DOMSelectors.values.innerHTML = '';
  document.querySelector("h1").textContent = 
        "Higher or Lower?";
  DOMSelectors.buttons.insertAdjacentHTML(
    "beforeend",
    `<button id="higherButton" class="button">Higher!</button>
    <button id="lowerButton" class="button">Lower!</button>`
  )
  getRandom()
})

async function getRandom() {
  hideNextButton()
  const higherButton = document.querySelector("#higherButton")
  const lowerButton = document.querySelector("#lowerButton")
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
  let data1, data2;
  try {
    data1 = await res1.json();
    data2 = await res2.json();
  } catch (error) {
    console.error("Error with (await res1/res2.json):", error);
    document.querySelector("h1").textContent = 
        "Uh oh, API error! Click next to try again!";
    DOMSelectors.container.innerHTML = ""
    DOMSelectors.buttons.innerHTML = "";
    displayNextButton()
    return;
  }
  DOMSelectors.container.innerHTML =
    `<div class="card">
    <h2 class="card-title">${symbol1.toUpperCase()}</h2>
    <img src="../gold-coin.png" alt="PictureOfCoin" class="card-img">
    </div>
    <div class="card">
    <h2 class="card-title">${symbol2.toUpperCase()}</h2>
    <img src="../gold-coin.png" alt="PictureOfCoin" class="card-img">
    </div>`;  
  DOMSelectors.text.insertAdjacentHTML(
    "beforeend",
    `<h3>Is ${symbol1.toUpperCase()} higher or lower than ${symbol2.toUpperCase()}?</h3>`
  )
  higherButton.addEventListener("click", function (event){
    console.log("You've chosen: Higher")
    event.preventDefault()
    if (data1[symbol1].usd>data2[symbol2].usd){
      DOMSelectors.text.innerHTML = "";
      DOMSelectors.text.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" is greater! You're right! </h3>`
      )
      DOMSelectors.values.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" has a value of ${data1[symbol1].usd} in USD, while "${symbol2.toUpperCase()}" has a value of ${data2[symbol2].usd} in USD.</h3>`
      )
      counter += 1;
      DOMSelectors.score.insertAdjacentHTML(
        "beforeend",
        `<h3>Your score is: ${counter}.</h3>`
      )
      DOMSelectors.buttons.innerHTML = "";
      displayNextButton()
    } else if (data1[symbol1].usd<data2[symbol2].usd) {
      DOMSelectors.text.innerHTML = "";
      DOMSelectors.text.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" is lower. You're wrong... </h3>`
      )
      DOMSelectors.values.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" has a value of ${data1[symbol1].usd} in USD, while "${symbol2.toUpperCase()}" has a value of ${data2[symbol2].usd} in USD.</h3>`
      )
      DOMSelectors.score.insertAdjacentHTML(
        "beforeend",
        `<h3>Your score was: ${counter}. Back to 0!</h3>`
      )
      counter = 0
      DOMSelectors.buttons.innerHTML = "";
      displayNextButton()
    }
  })
  lowerButton.addEventListener("click", function (event){
    console.log("You've chosen: Lower")
    event.preventDefault()
    if (data1[symbol1].usd>data2[symbol2].usd){
      DOMSelectors.text.innerHTML = "";
      DOMSelectors.text.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" is greater. You're wrong... </h3>`
      )
      DOMSelectors.values.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" has a value of ${data1[symbol1].usd} in USD, while "${symbol2.toUpperCase()}" has a value of ${data2[symbol2].usd} in USD.</h3>`
      )
      DOMSelectors.score.insertAdjacentHTML(
        "beforeend",
        `<h3>Your score was: ${counter}. Back to 0!</h3>`
      )
      counter = 0
      DOMSelectors.buttons.innerHTML = "";
      displayNextButton()
    } else if (data1[symbol1].usd<data2[symbol2].usd) {
      DOMSelectors.text.innerHTML = "";
      DOMSelectors.text.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" is lower! You're right! </h3>`
      )
      DOMSelectors.values.insertAdjacentHTML(
        "beforeend",
        `<h3>"${symbol1.toUpperCase()}" has a value of ${data1[symbol1].usd} in USD, while "${symbol2.toUpperCase()}" has a value of ${data2[symbol2].usd} in USD.</h3>`
      )
      counter += 1;
      DOMSelectors.score.insertAdjacentHTML(
        "beforeend",
        `<h3>Your score is: ${counter}.</h3>`
      )
      DOMSelectors.buttons.innerHTML = "";
      displayNextButton()
      }
    })}

getRandom()

  //write function that converts both currencies into USD, then compares which one is worth more.

  //utilize function compare after someone guesses if currency x is higher or lower than currency y.
  //if person selects higher, check if x > y. if x > y, they are correct! if x < y, they are wrong
  //if person selects lower, check if x < y. if x < y, they are correct! if x > y, they are wrong
  //if person is correct, then display "Correct!", then the values of both currencies. add 1 to the counter, and give a button to go to the next one. Splice to remove the first one, and generate a new one
  //if person is wrong, display "Incorrect!", then the values of both currencies. show score, then give a button to replay. when replaying, reset score.