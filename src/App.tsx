import { useEffect, useState } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList ";

interface IRecipeProps {
  recipeData: IRecipe[];
}
interface IRecipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

const App = () => {
  const [receipeTagNames,setReceipeTagNames] = useState<string[]>([]);
  const [receipeTagName, setTagName] = useState<string | null>(null);
  const [receipe,setReceipe] = useState<IRecipe[]>([])

  useEffect(()=>{
    fetch('https://dummyjson.com/recipes/tags')
    .then(response => response.json())
    .then (data => {
      setReceipeTagNames(data)
    })
  }
    ,[]);

  function getReceipe(tagName){
    setTagName(tagName);
  }
  useEffect(() => {
    if(receipeTagName){
      fetch (`https://dummyjson.com/recipes/tag/${receipeTagName}`)
      .then(response => response.json())
      .then (data => {
      setReceipe(data.recipes);
    })
    }
    
  }
    ,[receipeTagName]);

    function handleBackToTags(){
      setTagName(null);
      setReceipe([])

    }

    let listHolder = (<RecipeTagList tagList = {receipeTagNames} onSelectTag ={getReceipe}/>);
    if(receipeTagName){
      listHolder = (<div>
          <button onClick={handleBackToTags}>Back</button>
          <RecipeList recipes={receipe}/>
        </div>)
    }

  return (
    <div>
        <h1>ACME Recipe O'Master</h1>
        <div>
           {listHolder}
        </div>
        
    </div>
  );
};

export default App;
