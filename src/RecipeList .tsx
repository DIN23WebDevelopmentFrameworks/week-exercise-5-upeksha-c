import Recipe from "./Recipe";

interface IRecipeListProps {
    recipes: IRecipe[];
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

export default function RecipeList ({recipes}:IRecipeListProps) {
  return (
    <div>
        <h2>Receipes for  </h2>
        <div>
            {recipes.map((data) => (
                <Recipe recipeData = {data}/>
            ))}
        </div>
        
    </div>
  )
}
