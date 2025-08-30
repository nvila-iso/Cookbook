import RecipeListItem from "../components/RecipeListItem.jsx";
import { recipes } from "../db/recipes.js";

export default function RecipesList() {
  return (
    <main>
      {recipes.map((recipe) => {
        return <RecipeListItem recipe={recipe} />;
      })}
    </main>
  );
}
