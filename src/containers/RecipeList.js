import { Box } from "@mui/material";
import RecipeCard from "../components/RecipeCard";
import RecipeSlider from "../components/RecipeSlider";
import MeatRecipeCard from "../components/MeatRecipeCard";
import ChickRecipeCard from "../components/ChickRecipeCard";

const RecipeList = () => {
  return (
    <Box>
      <RecipeSlider />
      <RecipeCard />
      <ChickRecipeCard />
      <MeatRecipeCard />
    </Box>
  );
};

export default RecipeList;
