// console.log('hello I am checking...');
const loadCountry = () => {
    // console.log('hello is it coming in...');
  
    // Get user input from the input field
    const InputField = document.getElementById('input-field');
    const InputFieldText = InputField.value;
  
    // Clear the input field
    InputField.value = '';
  
    // Check if the input is not empty
    if (InputFieldText.trim() !== '') {
      const url = `https://restcountries.com/v3.1/name/${InputFieldText}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          // Check if data is an array (multiple countries) or an object (single country)
          if (Array.isArray(data)) {
            displayCountries(data);
          } else {
            displayCountry(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  };
  
  const displayCountries = (countries) => {
    const CountryContainer = document.getElementById('country-container');
  
    // Clear previous search results
    CountryContainer.innerHTML = '';
  
    countries.forEach((country) => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
      `;
      CountryContainer.appendChild(div);
    });
  };
  
//   const displayCountry = (country) => {
//     const CountryContainer = document.getElementById('country-container');
  
//     // Clear previous search results
//     CountryContainer.innerHTML = '';
  
//     const div = document.createElement('div');
//     div.innerHTML = `
//       <h3>${country.name.common}</h3>
//       <p>Capital: ${country.capital}</p>
//     `;
//     CountryContainer.appendChild(div);
//   };
  