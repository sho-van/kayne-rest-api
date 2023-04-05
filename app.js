const showQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => showData(data))

    const showData = (data) => {
        const showQuote = document.getElementById('quote')
        showQuote.classList.add('quote')
        showQuote.innerText = data.quote
    }
    const button = document.getElementById('next-button')
    button.innerText = 'Next Quote'
}