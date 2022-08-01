import { Box, CardMedia, IconButton, CardActions } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import masakan from "../apis/masakan";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const RecipeCard = () => {
  let navigate = useNavigate();

  const onClickRecipe = (key) => {
    navigate(`/detail/${key}`);
    window.scrollTo(0, 0);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const fetchedRecipes = await masakan.get("api/category/recipes/resep-daging");
        setRecipes(fetchedRecipes.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        sx={{
          mx: 4.5,
          mt: 3,
          fontFamily: "poppins",
          fontWeight: "400",
        }}
      >
        Resep Masakan Daging
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {recipes.map((recipe) => (
          <Card
            button
            onClick={() => onClickRecipe(recipe.key)}
            id={recipe.key}
            sx={{ maxWidth: 260, mt: 3, bgcolor: "#FFF7BC" }}
          >
            <CardMedia
              component="img"
              height="140"
              image={`${recipe.thumb}`}
              alt="Food-Picture"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontFamily: "poppins",
                  fontWeight: "400",
                  fontSize: 13,
                }}
              >
                {recipe.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {recipe.portion}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default RecipeCard;
