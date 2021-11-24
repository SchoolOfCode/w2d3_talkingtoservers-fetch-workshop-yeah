console.log("It's Kanye time...");

async function getQuote() {
  const response = await fetch("https://api.kanye.rest");
  const data = await response.json();
  console.log(data);

  const h1 = document.querySelector("#kanye-quote");
  h1.innerText = data.quote;
}

const button = document.querySelector("#new-quote-button");
button.addEventListener("click", getQuote);

// getQuote();
