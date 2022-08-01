import { Box } from "@mui/material";
import RecipeRekomendasi from "../components/RecipeRekomendasi";
import { useParams } from "react-router-dom";
import DetailCard from "../components/DetailCard";

const RecipeDetail = () => {
  let params = useParams();

  return (
    <Box>
      <DetailCard id_recipe={params.key}></DetailCard>
      <RecipeRekomendasi />
    </Box>
  );
};

export default RecipeDetail;
