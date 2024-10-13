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

interface IRecipeProps {
    recipeData: IRecipe;
  }

export default function Recipe({recipeData}:IRecipeProps) {
  return (
    <div style={{borderStyle:"solid", padding:"2%", margin:"2%"}}>
        <h2>{recipeData.name}</h2>
        <h3>Ingredients</h3>
        <ul>
            {recipeData.ingredients.map((ingredient) => <li>{ingredient}</li>)}
        </ul>
        <h3>Instructions</h3>
        <ol>
            {recipeData.instructions.map((instruction) => <li>{instruction}</li>)}
        </ol>   
    </div>
  )
}
