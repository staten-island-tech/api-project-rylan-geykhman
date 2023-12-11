const DOMSelectors = {
  button: document.querySelector(".button"),
}

async function getData() {
  let res = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
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
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/usd.json"
  );
  let data = await res.json();
  console.log(data)
})

//function compare (x,y){}
//write function that converts both currencies into USD, then compares which one is worth more.

//utilize function compare after someone guesses if currency x is higher or lower than currency y.
//if person selects higher,
//if person is correct, then display "Correct!", then the values of both
//else, display "Womp Womp", then the values of both