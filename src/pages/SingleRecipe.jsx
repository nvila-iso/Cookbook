import { useParams } from "react-router";
import { recipes } from "../db/recipes";

export default function SingleRecipe() {
  const { id } = useParams();

  const rIp = +id - 1;

  console.log(recipes[rIp]);

  return (
    <>
      <h1>{recipes[rIp].name}</h1>
      <p>A recipe sleeps here.</p>
    </>
  );
}
