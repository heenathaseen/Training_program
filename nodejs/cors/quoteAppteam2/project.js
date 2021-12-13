

var quotes = [];

async function getQuote() {
  const apiUrl = 'http://localhost:3000/quotes';
  try {
    //   throw new Error();                       // to display default backup quotes
    const response = await fetch(apiUrl);
    quotes = await response.json(); //will return promise
  } catch (error) {
    quotes = defaultQuotes;
  }
}
function newQuote() {
  
  getQuote().then(() => {
    setQuote();
  });
}

const ptag = document.getElementById("txt");

function setQuote() {
  let rnum = Math.floor(Math.random() * quotes.length);
  ptag.innerHTML = quotes[rnum].text + " <p> " + "- " + quotes[rnum].author + " </p>"; //assigning random quotes to <p> tag
}

function userDefinedQuotes() {
  // to display number of quote according to user input
  const cnt = document.getElementById("cnt").value;
  for (let i = 0; i < Number(cnt); i++) {
    let ptag = document.createElement("p");
    let rnum = Math.floor(Math.random() * quotes.length);
    ptag.innerHTML =
      quotes[rnum].text + " <p> " + "- " + quotes[rnum].author + " </p>";
    document.getElementById("container").insertBefore(ptag, document.getElementById("btn"));
    ptag.classList.add("txt");
  }
}

