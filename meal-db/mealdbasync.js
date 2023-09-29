const loadSearchigFood = async() => {
    const searchField = document.getElementById('search-field');
   const searchText = searchField.value;
//    console.log(searchText);
   searchField.value = "";

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;


// alternative of fetch then 

const res = await fetch(url);
const data = await res.json();
displaySearchResult(data.meals);


//    fetch(url)
//    .then(res => res.json())
//    .then(data => displaySearchResult(data.meals))



 
}


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    // console.log(searchResult);
    searchResult.textContent = '';
    if (meals.length === 0) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <h5>Result not Found</h5>
        `;
        searchResult.appendChild(div);
    }   

    meals.forEach(meal => {
        // console.log(meal);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML = `
      <div onclick="loadmealDetail(${meal.idMeal})" class="card">
        <img class="w-50" src="${meal.strMealThumb
        }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal
          }</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)
          }</p>
        </div>
      `;
      searchResult.appendChild(div);
    


    });
}

const loadmealDetail = mealId => {
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
fetch(url)
.then(res => res.json())
.then(data => displaymealDetail(data.meals[0]))
}

const displaymealDetail = (meal) =>{
// console.log(meal);

const mealDetails = document.getElementById('meal-details');
const div = document.createElement('div');
div.classList.add('card');
div.innerHTML = ` 
<img class="w-25" src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5>
  <p class="card-text">${meal.strInstructions.slice(0, 140)
  }</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
</div>
`;
mealDetails.appendChild(div);
}
