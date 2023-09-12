import { useParams } from "react-router-dom";
import useBeer from "../utils/useBeer";
Beer = () => {
    
  const beerData = useBeer();
  const currentBeerId = useParams().id - 1;

  return beerData === undefined ? (
    <></>
  ) : (
    <div className="beer">
      <img src={beerData[currentBeerId].image_url} alt="Photo" />
      <h1>{beerData[currentBeerId].name}</h1>
      <h2>Description</h2>
      <p key="description">{beerData[currentBeerId].description}</p>
      <div className="ingredients" key="ingredients">
        <h2>Ingredients</h2>
        <h3 key="malt">Malt</h3>
        {beerData[currentBeerId].ingredients.malt.map((e, index) => {
          return (
              <p key={"malt" + index}>
                {e.name + " : " + e.amount.value + " " + e.amount.unit}
              </p>
          );
        })}
        <h3 key="hops">Hops</h3>
        {beerData[currentBeerId].ingredients.hops.map((e, index) => {
          return (
              <p key={"hops" + index}>
                {e.name + " : " + e.amount.value + " " + e.amount.unit}
              </p>
          );
        })}
        <h3 key="yeast">Yeast</h3>
        <p>{beerData[currentBeerId].ingredients.yeast}</p>
      </div>
      <div className="food_pairing" key="food_pairing">
        <h3>Food Pairing</h3>
        {beerData[currentBeerId].food_pairing.map((e, index) => {
          return (
              <p key={"food" + index}>{e}</p>
          );
        })}
      </div>
      <p key="tips">
        <span className="bold">Brewer's Tips </span> :{" "}
        {beerData[currentBeerId].brewers_tips}
      </p>
    </div>
  );
};
export default Beer;
