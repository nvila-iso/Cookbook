import "./App.css";
import { Routes, Route } from "react-router";
import Layout from "./layout/Layout";
import RecipesList from "./pages/RecipesList";
import SingleRecipe from "./pages/SingleRecipe";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<RecipesList />} />
          <Route path="/:id" element={<SingleRecipe />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
