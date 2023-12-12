const DOMSelectors = {
  button: document.querySelector(".button"),
  container: document.querySelector(".container"),
}

async function getData() {
  let theCurrency = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
  )

  let datav = await theCurrency.json();
  const rylena = []
  datav.forEach((something)=>rylena.push(something))
  console.log(rylena)
  
  let currency = rylena.random()
  let res = await fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  );
  let data = await res.json();
  console.log(data);
}
getData();

//Get the currency list with USD as base currency:
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json

DOMSelectors.button.addEventListener("click", async function (event){
  event.preventDefault()
  let res = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json"
  );
  let data = await res.json();
  console.log(data)
})

//function compare(x,y){}
//write function that converts both currencies into USD, then compares which one is worth more.

//utilize function compare after someone guesses if currency x is higher or lower than currency y.
//if person selects higher, check if x > y. if x > y, they are correct! if x < y, they are wrong
//if person selects lower, check if x < y. if x < y, they are correct! if x > y, they are wrong
//if person is correct, then display "Correct!", then the values of both currencies. add 1 to the counter, and give a button to go to the next one.
//if person is wrong, display "Womp Womp", then the values of both currencies. show score, then give a button to replay. when replaying, reset score.