
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('new-quote');

const getQuote = async() => {

    try{
        const response = await fetch('./quotes.json');
        const data = await response.json();
        console.log(data)

        const randomIndex = Math.floor(Math.random() * data.length);
        quote.textContent = data[randomIndex].quote;
        author.textContent = '- ' + data[randomIndex].author;
    } catch (error) {
        console.error('Error fetching quote:', error);
    }

}

button.addEventListener('click', getQuote);