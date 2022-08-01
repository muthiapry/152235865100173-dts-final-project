import * as React from "react";
import masakan from "../apis/masakan";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "./style/style.css";

const DetailCard = ({ id_recipe }) => {
  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const fetchedRecipes = await masakan.get(`/api/recipe/${id_recipe}`);
        setRecipes(fetchedRecipes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRecipes();
  }, [id_recipe]);

  return (
    <div>
      <div className="detail-recipe-poster">
        <div className="detail-recipe-poster-contain">
          <h1>{recipe.title}</h1>
        </div>
        <img className="detail-recipe-poster-image" src={recipe.title} alt="" />
      </div>
      <div className="detail-recipe-description">
        <h3>Description</h3>
        <p>{recipe.desc}</p>
      </div>
    </div>
  );
};

export default DetailCard;
