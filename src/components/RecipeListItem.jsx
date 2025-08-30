import { Link } from "react-router";

export default function RecipeListItem({ recipe }) {
  return (
    <>
      <div className="item-container">
        <div className="img-container">
          <img src="src/assets/lentil_soup.jpg" alt="" />
        </div>

        <div className="details">
          <h2>{recipe.name}</h2>
          <p>{recipe.description}</p>
          <button className="details-button">
            <Link to={`/${recipe.id}`}>Recipe</Link>
          </button>
        </div>
      </div>
    </>
  );
}
