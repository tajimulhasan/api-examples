// console.log('hello I am checking...');
const loadCountry = () =>{
// console.log('hello is it come in...');
const InputField = document.getElementById('input-field');
const InputFieldText = InputField.value;


// clear 
InputField.value = '';

const url = `https://restcountries.com/v3.1/name/${InputFieldText}`;
fetch(url)
.then (res => res.json())
.then (data => displayCountry(data));
}


const displayCountry = countrys  => {
const CountrYinclude = document.getElementById('country-container');
CountrYinclude.textContent = '';

countrys.forEach((country) => {
    // console.log(country);
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>${country.name.common}</h3>
    <p>Capital: ${country.capital}</p>
    `;
    
 CountrYinclude.appendChild(div);
});
// CountrYinclude.textContent = '';



}




// practice 
// 1. api show on display [this api you will be taken from jsonplaceholder web page] all comments you have to show web page\
// 2. click  specific data number and show it in display 
// 3. you have a button and if you click here all data will show
// Go to Random user Generator website and show random picture or location etc. [what you were facinating in that time]

// exceptionals
// you can use different button to each value


// challenging

// 1. sportsdb to collect api.
// 2.

