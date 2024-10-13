import RecipeTag from "./RecipeTag";

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
  }

export default function RecipeTagList({tagList,onSelectTag}:IRecipeTagListProps) {
    
  return (
    <div>
        
        <ul style={{listStyleType:"none", cursor:"pointer"}}>
        <h2>Select a Recipe Tag</h2>
            {tagList.map((tag) => <RecipeTag tagName= {tag} onSelectTag ={onSelectTag}/>)}
        </ul>
        
    </div>
  )
}
