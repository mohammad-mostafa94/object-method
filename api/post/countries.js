const countriesFunc = () => {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(response => response.json())
    .then(data => countryDetails(data));
}

const countryDetails = (details) =>{
    const countryArea = document.getElementById("countryArea");
    details.forEach(country => {
        // console.log(country)
        const div = document.createElement("div");
        div.classList.add("country");
        div.innerHTML = `
        <h2>${country.name}</h2>
        <p>${country.capital}</p>
        <button onclick="countryNameById('${country.name}')">country Details</button>
        `
        countryArea.appendChild(div);
    });
}
countriesFunc();
const countryNameById = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => countryDetailsInfo(data[0]));
}

const countryDetailsInfo= details => {
    console.log(details);   
    const div = document.getElementById("countryInf");
    div.innerHTML = `
    <h3>country Name:- ${details.name}</h3>
    <h3>country Capital:- ${details.capital}</h3>
    <img width="200px"  src='${details.flag}'></img>
    `
    console.log(details);
}