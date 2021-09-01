const quotation = () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => displayQoutes(data));
}
 displayQoutes = quotation => {
    const quote = document.getElementById("quoteId");
    quote.innerText = quotation.quote;

}