import countriCards from '../templates/countries-card.hbs'

fetch('https://restcountries.com/v2/name/ukraine')
    .then(response => {
    return response.json()
    })
    .then( count  => {
        console.log(count)
        const markup = countriCards(count);
        console.log(markup)
    })
    .catch(error => {
      console.log(error)  
    })
