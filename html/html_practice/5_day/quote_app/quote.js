var quotes = [];
var defaultQuotes = [
  {
    text: "Well begun is half done.",
    author: "Aristotle", //Backup Array of quotes
  },
  {
    text: "Life is a learning experience, only if you learn.",
    author: "Yogi Berra",
  },
  {
    text: "Self-complacency is fatal to progress.",
    author: "Margaret Sangster",
  },
  {
    text: "Peace comes from within. Do not seek it without.",
    author: "Buddha",
  },
  {
    text: "What you give is what you get.",
    author: "Byron Pulsifer",
  },
  {
    text: "We can only learn to love by loving.",
    author: "Iris Murdoch",
  },
];

async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
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
