let apiWords = [];

// Get Words From API using fetch()
async function getWordsFetch() {
const apiUrl = 'https://type.fit/api/words';
try {
    const response = await fetch(apiUrl);
    apiWords = await response.json();
    console.log(apiWords);
} catch (error) {
    // Catch Error Here
    console.error(error)
}
}

// Get Words From API using XMLHttpRequest
async function getWordsX() {
const apiUrl = 'https://type.fit/api/words';
const xhttp = new XMLHttpRequest();
function reqListener () {
    apiWords = JSON.parse(this.responseText)
    console.log(apiWords);
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", apiUrl);
oReq.send();  
}

getWordsFetch()

