const searchFood = ()=> {
    const searchField = document.getElementById("searchId");
    const searchText = searchField.value;
    searchField.value = '';
    if (searchText == '') {
        var tag = document.createElement("h1");
        var text = document.createTextNode("Not food found here");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
    }
    
       
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(response => response.json())
        .then(data => searchMealResult(data.meals))
       
const searchMealResult = (meals) =>{
    
    const searchResult = document.getElementById("searchResult");
    searchResult.textContent= '';
    if (meals.length == 0) {
        searchResult.textContent= '';
        var tag = document.createElement("h1");
        var text = document.createTextNode("Not food found here");
        tag.appendChild(text);
        var element = document.getElementById("new");
        element.appendChild(tag);
    }
    else{
        meals.forEach(food => {
            console.log("food",food);
            const div = document.createElement("div");
            div.classList.add("col");
            div.innerHTML = `
            <div onclick="mealIds(${food.idMeal})" class="card h-100">
                <img src="${food.strMealThumb}" class="card-img-top" alt="${food.strMealThumb}">
                <div class="card-body">
                    <h5 class="card-title">${food.strMeal}</h5>
                    <p class="card-text">${food.strInstructions.slice(0,200)}....</p>
                </div>
            </div>
        `
        searchResult.appendChild(div);
        });
    }
    
}

const mealIds = mealId =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(response => response.json())
    .then(data => mealDetails(data.meals[0]));
}

const mealDetails = meal => {
    // console.log(meal);
    const mealFull = document.getElementById("meal-details");
   
    const div = document.createElement("div");
    div.classList.add('card','md-3');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}......</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    `
    mealFull.appendChild(div);
}




