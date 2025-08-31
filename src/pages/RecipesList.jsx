import RecipeListItem from "../components/RecipeListItem.jsx";
import { recipes } from "../db/recipes.js";

export default function RecipesList() {
  return (
    <main>
      <div className="recipes-list">
        {recipes.map((recipe) => {
          return <RecipeListItem key={recipe.id} recipe={recipe} />;
        })}
      </div>
    </main>
  );
}
