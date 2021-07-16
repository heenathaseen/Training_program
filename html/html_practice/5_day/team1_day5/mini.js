var quotes = [
    '“Just as a mirror reflects as a mans face his personality is reflected in his choice of friends. One must always be careful in forming friendships and acquaintances, for one’s friends, are in a way, an extension of one’s inner inclinations and tendencies.” ~ Chanakya',
    '“No one can defeat a powerful mind.”  ~ Chanakya',
    '“The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.” ~ Chanakya',
    '“Even if a snake is not poisonous, it should pretend to be venomous.” ~ Chanakya',
    '“Before you start some work always ask yourselves three questions why I am doing it, what the results might be and will I be successful. Only when you think deeply and find satisfactory answers to these questions, go ahead.” ~ Chanakya',
    '“A man is great by deeds, not by birth.” ~ Chanakya',
    '“He who is overly attached to his family members, experiences fear and sorrow, for the root of all grief is attachment. Thus one should discard attachment to be happy.” ~ Chanakya',

]
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

let apiWords = {};

async function getWordsFetch() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        //throw new Error();      

        const response = await fetch(apiUrl);
        apiWords = await response.json();

        let idx = Math.floor(Math.random() * apiWords.length)
        document.getElementById('quoteDisplay').innerHTML = apiWords[idx].text;
        document.getElementById('author').innerHTML = apiWords[idx].author;

    } catch (error) {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    }

}

function displayNew() {
    var displayquotes = ""
    var txtId = document.getElementById("inputText").value;
    console.log(txtId);


    for (let i = 0; i < txtId; i++) {

        displayquotes += quotes[i] + "<br> <br>";

        document.getElementById('displayNewQuotes').innerHTML = displayquotes;

    }



}