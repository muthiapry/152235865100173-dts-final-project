import * as React from "react";
import masakan from "../apis/masakan";
import { useEffect, useState } from "react";
import Image from "../img/indexImage.jpg";
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

  console.log(recipe !== null, Object.entries(recipe).length, recipe);
  if (!Object.entries(recipe).length) {
    return <div>KOSONG</div>;
  }
  console.log(recipe.results.step);
  return (
    <div>
      <div className="detail-recipe-poster">
        <div className="detail-recipe-poster-contain">
          <h1>{recipe.results.title}</h1>
        </div>
        {recipe.results.thumb ? (
          <img
            src={recipe.results.thumb}
            alt="poster"
            className="detail-recipe-poster-image"
          />
        ) : (
          <img src={Image} alt="poster" className="detail-recipe-poster-image" />
        )}
        {/* <img className="detail-recipe-poster-image" src={recipe.results.thumb} alt="" /> */}
      </div>
      <div className="detail-recipe-description">
        <h3>Deskripsi</h3>
        <p>{recipe.results.desc}</p>
      </div>
      <div className="detail-recipe-description">
        <h3>Komposisi</h3>
        {(() => {
          let step = [];

          for (let i = 0; i <= recipe.results.step.length; i++) {
            step.push(
              <span key={i}>
                {recipe.results.ingredient[i] + ","}
                <br></br>
              </span>
            );
          }
          return step;
        })()}
      </div>
      <div className="detail-recipe-description">
        <h3>Tahapan</h3>
        {(() => {
          let step = [];

          for (let i = 0; i <= recipe.results.step.length; i++) {
            step.push(
              <span key={i}>
                {recipe.results.step[i]}
                <br></br>
              </span>
            );
          }
          return step;
        })()}
      </div>
    </div>
  );
};

export default DetailCard;
