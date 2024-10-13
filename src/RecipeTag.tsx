

interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

export default function RecipeTag({tagName,onSelectTag}:IRecipeTagProps) {
   
    function tagSelect(){
        onSelectTag(tagName);
    }
  return (
    <li onClick={tagSelect} style={{borderStyle:"solid"}}>
        {tagName}
    </li>
  )
}
