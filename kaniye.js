// checking JS file attachingconsole.log('Hello I am Tajimul Hasan');
const loadQuotes = () => {
fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(data => displayQuotes(data))
}


const displayQuotes = quote => {
const quoteElement = document.getElementById('quote');
quoteElement.innerText = quote.quote; 
}