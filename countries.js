const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = countrieS => {
//     const getName = countries.name;
// const countriesContainer = document.getElementById('countries');
// for(const country of countries){
    
// }
const countriesDiv = document.getElementById('countries');

countrieS.forEach(country => {
    // console.log(country);
    
   const div = document.createElement('div')
    // div.style.padding = '6px';
    // div.style.margin = '6px';
    // div.style.border = '3px dashed red';
    // div.style.borderRadius = '23px';
    div.classList.add('country')

div.innerHTML = `
  <h3>Country: ${country.name.common}</h3>
  <p>Capital: ${country.capital}</p>
  <button onclick="loadCountrisByName('${country.name.common}')">Details</button>
`
//    const h3 = document.createElement('h3');
//    h3.innerText = country.name.common;
//    div.appendChild(h3);

//    const p = document.createElement('p');
//    p.innerText = country.capital;
  
//    div.appendChild(p);

   countriesDiv.appendChild(div);

// console.log(country.name.common);
});
}


const loadCountrisByName = (name) => {
    const url  = `https://restcountries.com/v3.1/name/${name}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = (showDetail) => {
    console.log(showDetail)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h4>Name: ${showDetail.name.common}</h4>
    <p>Population: ${showDetail.population
    }</p>
    <img width="100px" src="${showDetail.flags.png}">
    `
}