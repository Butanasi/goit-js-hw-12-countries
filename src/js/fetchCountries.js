import countryCards from '../templates/countries-card.hbs';
import countriList from '../templates/list-markup.hbs';
import 'lodash.debounce';





const divEl = document.querySelector('.list')
const inputEl = document.querySelector('.input')
inputEl.addEventListener('input', onSearch)
 

function onSearch(e) {
    e.preventDefault();
    const name = e.currentTarget.value

    fetchCountryByName(name)
        .then(renderCard)
        .catch(fetchError)
    
}



function fetchCountryByName(countryName) {
    return fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then(response => {
    return response.json()
    })
        .then(data => {
            if (data.status === 404) {
            throw new Error(data.status)
            } else {
                return data
        }
    })
}
function renderCard(country) {
    const markupCards = countryCards(country);
    const markupList = countriList(country)
    if (country.length > 10) {
       
    } else if (country.length >= 2 && country.length <= 10) {
        divEl.innerHTML = markupList
    } else {
        divEl.innerHTML = markupCards
    }
}
function fetchError(error) {
    
}







// import fetchCountries from './fetchCountries';
// import listCountry from '../layouts/list-country.hbs';
// import cardCountry from '../layouts/card-country.hbs';
// import {alert, error, notice, defaultModules } from '@pnotify/core';
// import * as PNotifyDesktop from '@pnotify/desktop';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';
// const debounce = require('lodash.debounce');

// const refsInput = document.querySelector('input');
// const refsRender = document.querySelector('.render');

// refsInput.addEventListener(
//   'input',
//   debounce(e => {
//     if (e.target.value.length > 0) {
//       fetchCountries(e.target.value)
//         .then(renderCountry)
//         .catch(onFetchError);
//     }
//   }, 500),
// );

// function renderCountry(country) {
//   if (country.length >= 2 && country.length <= 10) {
//     const markupList = listCountry(country);
//     refsRender.innerHTML = markupList;
//     const refsListCountry = document.querySelector('.country-list');
//     refsListCountry.addEventListener('click', targetValue);
//   } else if (country.length === 1) {
//     const markupCard = cardCountry(country);
//     refsRender.innerHTML = markupCard;
//   } else if (country.length > 10) {
//     const myNotice = notice({
//       title:'Too many matches found.',
//       text: ' Please enter a mare specific query!',
//     });
//   }
// }
// function targetValue(e) {
//   if (e.target.nodeName !== 'LI') {
//     return;
//   }
//   refsInput.value = e.target.textContent;
//   fetchCountries(refsInput.value).then(renderCountry);
// }
// function onFetchError(mistake) {
//   const myError = error({
//     title:'Error',
//     text: `${mistake}`,
//   });
// }
// import { notice, defaultModules } from '@pnotify/core';
// import * as PNotifyDesktop from '@pnotify/desktop';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

// export default function fetchCountries(searchQuery) {
//   return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
//     .then(response => {
//       return response.json();

//     })
//     .then(data => {
//       if (data.status === 404) {
//         throw new Error(data.status)
//       } else {
//         return data
//       }
//     })
// }