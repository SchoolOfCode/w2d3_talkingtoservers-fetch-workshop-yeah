console.log("It's Kanye time...");

//Task 1
// 👉 Use fetch to send a GET request to https://api.kanye.rest/ and store the resolved value of the returned promise in a variable called response. -done

// 👉 Call the .jsolsn() method on the response variable to parse the JSON data contained in the response object. Store the resolved value of the returned promise in a variable called data. - done

// 👉 Use that data to set the text of the h1 with id "kanye-quote".

// 👉 Call this function as soon as the page loads.
// async function getQuote() {
//   let response = await fetch("https://api.kanye.rest/");
//   let data = await response.json();
//   let h1 = document.querySelector("#kanye-quote");
//   h1.innerText = data.quote;
// }

//window.addEventListener("load", getQuote);

// Task 2 - On Click
// Sweet - we're getting a new Kanye West quote every time the page is refreshed. Let's make the page more interactive.

// 👉 Attach an event listener to the button with id "new-quote-button" to call getQuote when the user clicks.

// let button = document.querySelector("#new-quote-button");

// button.addEventListener("click", getQuote);

// Task 3 - History
// We're now going to display every quote we fetch in a list so that we don't forget our favorites.

// 👉 Create a function that takes in a string, creates a new list item with that string, and adds it to the ol with the id "kanye-quote-history".

// 👉 Call this function within your getQuote function so that the quotes get stored in the "kanye-quote-history" list.
let ol = document.querySelector("#kanye-quote-history");
let h1 = document.querySelector("#kanye-quote");
let button = document.querySelector("#new-quote-button");
const allLists = document.querySelectorAll("li");
let listItems = [];

function listFunction(words) {
  let list = document.createElement("li");
  list.innerText = words;
  ol.appendChild(list);
}

async function getQuote() {
  let response = await fetch("https://api.kanye.rest/");
  let data = await response.json();
  h1.innerText = data.quote;
  let storedQuotes = h1.innerText;

  // Bonus Task!
  // You might see after a while that the quotes we fetch from the API are sometimes repeated.

  // 👉 Change your code so that if a repeat quote is generated, it will not be added to the list of previous quotes.
  if (listItems.includes(storedQuotes) === false) {
    listItems.push(storedQuotes);
    listFunction(storedQuotes);
  }
}
// for (i = 0; i < allLists.length; i++) {
//   console.log(allLists.innerText);
//   if (storedQuotes !== allLists.innerText) {
//     console.log("Hello World");
//   }
// }

button.addEventListener("click", getQuote);
