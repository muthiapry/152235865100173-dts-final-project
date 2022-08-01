import { Box, Typography } from "@mui/material";
import * as React from "react";
import masakan from "../apis/masakan";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";
import { useNavigate } from "react-router-dom";

const RecipeRekomendasi = () => {
  let navigate = useNavigate();

  const onClickMovie = (key) => {
    navigate(`/detail/${key}`);
    window.scrollTo(0, 0);
  };

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await masakan.get("/api/recipes/2");
        setRecipes(fetchedRecipes.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <Box sx={{ margin: 10 }}>
      <Typography variant="h6" gutterBottom component="div">
        Rekomendasi
      </Typography>
      <div className="container">
        <Swiper
          slidesPerView={5}
          spaceBetween={3}
          navigation={true}
          modules={[Grid, Navigation]}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
            },
            "@0.75": {
              slidesPerView: 3,
            },
            "@1.00": {
              slidesPerView: 4,
            },
            "@1.50": {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {recipes.map((recipe) => (
            <SwiperSlide id={recipe.id}>
              <div className="imageContainer" onClick={() => onClickMovie(recipe.key)}>
                <img src={recipe.thumb} alt="poster" className="slide-img" />
                <div className="imgTitle">{recipe.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
};

export default RecipeRekomendasi;
