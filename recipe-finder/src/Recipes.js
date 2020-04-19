import React, {useState, useEffect} from "react";
import RecipeMap from "./RecipeMap"


const Recipes = () => {

    const API_ID = "e464842e";
    const API_KEY = "83de0e44fbe4767db0dd5c3e7fbec345";

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('') 

useEffect(()=> {
    getRecipes()
}, [query])

const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
}

const updateSearch = e => {
    setSearch(e.target.value)
    console.log(search)
}

const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
}

return (
  <div>
    <form onSubmit={getSearch}>
      <div className="search">
      <h4>Recipe App</h4>
        <input type="text" value={search} onChange={updateSearch} placeholder="What are you hungry for?"/>
        <br />
        <button type="Submit">Search</button>
      </div>
    </form>

    <main className="grid-spacing">
      {recipes.map((recipe) => (
        <RecipeMap
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          image={recipe.recipe.image}
          cuisineType={recipe.recipe.cuisineType}
          url={recipe.recipe.url}
          ingredientLines={recipe.recipe.ingredientLines}
          prep={recipe.recipe.prep}
        />
      ))}
    </main>
  </div>
);
};

export default Recipes;
