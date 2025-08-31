import { useParams, Link } from "react-router";
import { useState } from "react";
import { recipes } from "../db/recipes";

export default function SingleRecipe() {
  // const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  let recipe = recipes[id];

  return (
    <>
      <main>
        <Link to={-1} viewTransition className="back-button">
          go back
        </Link>
        <div className="large-card">
          <div className="img-container">
            <img src="src/assets/lentil_soup.jpg" alt="" />
          </div>
          <div className="instructions">
            <h2>{recipe.name}</h2>
            <p className="user-upload">uploaded by: {recipe.createdBy}</p>
            <div className="tags-container">
              <div className="servings">Serving Size: {recipe.servings}</div>
              <div className="recipe-details">
                {recipe.tags.map((item, index) => (
                  <p className="tag-item" key={item + index}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="description">{recipe.description}</div>
          </div>
        </div>
        <div className="ingredients-card">
          <p>ingredients</p>
          <div className="ingredients">
            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={item + index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="instructions-card">
          <p>instructions</p>
          <ol>
            {recipe.instructions.map((item, index) => (
              <li key={item + index}>{item}</li>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}
