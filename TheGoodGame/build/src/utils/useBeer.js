import { useState, useEffect } from "react";
import { PUNK_API } from "../constants";

const useBeer = () => {
  const [beerData, setBeerData] = useState();
  async function callAPI() {
    const data = await fetch(PUNK_API);
    const json = await data.json();
    setBeerData(json);
  }

  //fetching the API
  useEffect(() => {
    callAPI();
  }, []);
  return (beerData);
};
export default useBeer;
