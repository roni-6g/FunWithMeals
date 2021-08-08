
function getMealName(){
    const searchFood = document.getElementById('search-input').value
 
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    .then(res => res.json())
    .then(data => searchMeal(data))
    .catch(e => {
        const searchAlert = document.getElementById('search-alert')
        const p = document.createElement('p')
        p.className = 'alert-text'
        p.innerText = 'Something Went Wrong! Please write a valid name!'
        searchAlert.appendChild(p)
        
    })
}

const searchMeal = food => {
    const foodContainer = document.getElementById('meal-container')
    document.getElementById('meal-container').innerHTML = ""
    document.getElementById('search-alert').innerText = " "
    document.getElementById('ingredient').innerText = ""
    const meal = food.meals    

    meal.forEach(result => {
        const food = result 

        const foodDiv = document.createElement('div')
        foodDiv.className = 'mb-3 col-sm-12 col-md-6 col-lg-4'
        const foodResult = `
            <div onclick="showDetails(${food.idMeal})" class="status"> 
                <img src="${food.strMealThumb}">
                <h4> ${food.strMeal} <h4>
            </div>
        `
        foodDiv.innerHTML = foodResult 
        foodContainer.appendChild(foodDiv)

    });
}

function showDetails(id){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(data => showIngredient(data))
}

const showIngredient = data => {
   const ingredient = data.meals[0]
   const ingredientDiv = document.getElementById('ingredient')
   document.getElementById('ingredient').innerText = " "
   const div = document.createElement('div')
   const ingredientResult = `
        <div> 
            <img src="${ingredient.strMealThumb}">
            <h4> ${ingredient.strMeal} </h4>
            <h5> Ingredient </h5>
            <p> <b>Ingredient 1: </b> ${ingredient.strIngredient1} </p>
            <p> <b>Ingredient 2: </b> ${ingredient.strIngredient2} </p>
            <p> <b>Ingredient 3: </b> ${ingredient.strIngredient3} </p>
            <p> <b>Ingredient 4: </b> ${ingredient.strIngredient4} </p>
            <p> <b>Ingredient 5: </b> ${ingredient.strIngredient5} </p>            
            <p> <b>Ingredient 6: </b> ${ingredient.strIngredient6} </p>
            <p> <b>Ingredient 7: </b> ${ingredient.strIngredient7} </p>
            <p> <b>Ingredient 8: </b> ${ingredient.strIngredient8} </p>
            <p> <b>Ingredient 9: </b> ${ingredient.strIngredient9} </p>
            <p> <b>Ingredient 10: </b> ${ingredient.strIngredient10} </p>
        </div>
   `
   div.innerHTML = ingredientResult 
   ingredientDiv.appendChild(div)
   document.getElementById('meal-container').innerHTML = ""
}