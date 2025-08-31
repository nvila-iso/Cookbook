import { Link } from "react-router";

export default function RecipeListItem({ recipe }) {
  return (
    <>
      <div className="item-container card">
        <div className="img-container">
          <img src="src/assets/lentil_soup.jpg" alt="" />
        </div>
        <h2>{recipe.name.toLowerCase()}</h2>
        <div className="details-container">
          <p>serves: {recipe.servings}</p>
          <div className="recipe-details">
            {recipe.tags.map((item) => (
              <p className="tag-item">{item}</p>
            ))}
          </div>
          <Link to={`/${recipe.id}`} viewTransition>
            recipe
          </Link>
        </div>
      </div>
    </>
  );
}
