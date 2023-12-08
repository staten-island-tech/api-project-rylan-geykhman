async function getData() {
  let res = await fetch(
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
  );
  let data = await res.json();
  console.log(data);
}
getData();