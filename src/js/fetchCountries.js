import countryCards from '../templates/countries-card.hbs'
const ulEl = document.querySelector('.list')
const inputEl = document.querySelector('.input')
inputEl.addEventListener('input', onSearch)

function onSearch(e) {
    e.preventDefault();
    const name = e.currentTarget.value
    console.log(name)
    fetchCountryByName(name)
        .then(renderCard)
        .catch(error => console.log(error))
        
    
}



function fetchCountryByName(countryName) {
    return fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => {
    return response.json()
    })
    
}
function renderCard(country) {
     const markup = countryCards(country);
        console.log(markup)
        ulEl.innerHTML=markup
}