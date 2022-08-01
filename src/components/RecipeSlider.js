import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import * as React from "react";
import masakan from "../apis/masakan";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";
import { useNavigate } from "react-router-dom";

const RecipeSlider = () => {
  let navigate = useNavigate();

  const onClickRecipe = (key) => {
    navigate(`/detail/${key}`);
    window.scrollTo(0, 0);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const fetchedRecipes = await masakan.get("/api/recipes");
        setRecipes(fetchedRecipes.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipe();
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {recipes.map((recipe) => (
            <SwiperSlide id={recipe.key}>
              <Card
                button
                onClick={() => onClickRecipe(recipe.key)}
                id={recipe.key}
                sx={{
                  display: "flex",
                  maxHeight: 400,
                  cursor: "pointer",
                  bgcolor: "#FFF7BC",
                }}
              >
                <Box
                  button
                  onClick={() => onClickRecipe(recipe.key)}
                  id={recipe.key}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: 2 / 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardContent sx={{ flex: "1 0 auto", mt: 2, padding: 7 }}>
                    <Typography
                      component="div"
                      variant="h3"
                      sx={{
                        fontFamily: "poppins",
                        fontWeight: "400",
                      }}
                    >
                      {recipe.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {recipe.portion}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Estimasi Pembuatan {recipe.times}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Tingkat Kesulitan {recipe.dificulty}
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ maxWidth: 2 / 4 }}
                  image={`${recipe.thumb}`}
                  alt="Recipe poster"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
};

export default RecipeSlider;
