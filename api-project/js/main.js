async function getData() {
  let res = await fetch(
    ""
  );
  let data = await res.json();
  data.forEach((item)=> console.log(item))
}
getData();