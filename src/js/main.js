import fetchCountryByName from "./fetchCountries.js"
import countryCards from '../templates/countries-card.hbs';
import countriList from '../templates/list-markup.hbs';
const debounce = require('lodash.debounce');
import {alert, error, notice, defaultModules} from '@pnotify/core';
import * as PNotifyDesktop from '@pnotify/desktop';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';




const divEl = document.querySelector('.list')
const inputEl = document.querySelector('.input')




inputEl.addEventListener('input', debounce(e => {
    if (e.target.value.length > 0) {
        
        fetchCountryByName(e.target.value)    
        .then(renderCard)
        .catch(fetchError)
       }
},500))
  
function renderCard(country) {
    const markupCards = countryCards(country);
    const markupList = countriList(country)
    if (country.length === 1) {

        divEl.innerHTML = markupCards
       
    } else if (country.length >= 2 && country.length <= 10) {

        divEl.innerHTML = markupList
        const listEl = document.querySelector('.list-name-country')
        listEl.addEventListener('click', loadNameCountry)
        
    } else if (country.length > 10) {

         myAlert = alert({
            title:'Too many matches found.',
            text: ' Please enter a mare specific query!', 
        })
        
    }
}

function fetchError() {
    const myError = error({
        title: 'Please enter a valid name countries',
    });  
}


function loadNameCountry(e) {
  inputEl.value = e.target.textContent;
  fetchCountryByName(inputEl.value).then(renderCard);
}