import { useParams } from "react-router";
import { recipes } from "../db/recipes";

export default function SingleRecipe() {
  const { id } = useParams();

  return (
    <>
      <div className="large-card">
        <div className="img-container">
          <img src="src/assets/lentil_soup.jpg" alt="" />
        </div>
        <div className="instructions">
          <h2>{recipes[id].name}</h2>
          <p className="user-upload">uploaded by: {recipes[id].createdBy}</p>
          <div className="tags-container">
            <div className="recipe-details">
              {recipes[id].tags.map((item) => (
                <p className="tag-item">{item}</p>
              ))}
            </div>
          </div>
          <div className="description">{recipes[id].description}</div>
        </div>
      </div>
      <div className="ingredients-card">
        <p>ingredients</p>
        <div className="ingredients">
          <ul>
            {recipes[id].ingredients.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="instructions-card">
        <p>instructions</p>
        <ol>
          {recipes[id].instructions.map((item) => (
            <li>{item}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
