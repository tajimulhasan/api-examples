const loadData = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = comments =>{

const DataContainer = document.getElementById('data-container');

for(const comment of comments){
    // console.log(comment);
  
    const div = document.createElement('div');
    div.innerHTML = `<h3>Name: ${comment.name}</h3>         
                     Email: ${comment.email}<br>
                     Id: ${comment.id}<br>
    `;
    div.classList.add('comment-div');
    DataContainer.appendChild(div);
}
    

}



const loadingData = () =>{
//searchig specific ID number and show  peron details 
const serchigInputField = document.getElementById('serchinginput-field');
const searchingInputFieldText = serchigInputField.value;
// console.log(searchingInputFieldText); for test
// clear  
serchigInputField.value = '';

    const url = `https://jsonplaceholder.typicode.com/comments/${searchingInputFieldText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaysearchingData(data))
}

const displaysearchingData = numbers =>{
const searchResult = document.getElementById('search-result');
searchResult.textContent = '';
// console.log('Tajiml hasan ',searchResult);
   console.log(numbers);
    const div = document.createElement('div');

    div.innerHTML = `
    <h3>Name: ${numbers.name}</h3>
        Email: ${numbers.email}<br>
        Id: ${numbers.id}<br>
        <strong>Comment: ${numbers.body.slice(0, 50)}</strong> <br>
    `;
    div.classList.add('single-data')
    searchResult.appendChild(div);
}


// const displaySearchingData = data => {
//     const searchResult = document.getElementById('search-result');
//     // searchResult.textContent = ''; // Clear any previous results
  
//     if (data) {
//       const div = document.createElement('div');
//       div.innerHTML = `
//         <h3>Name: ${data.name}</h3>
//         Email: ${data.email}<br>
//         ID: ${data.id}<br>
//       `;
//       searchResult.appendChild(div);
//     } else {
//       // Handle the case when no data is found (e.g., display an error message)
//       searchResult.textContent = 'No data found';
//     }
//   };


























