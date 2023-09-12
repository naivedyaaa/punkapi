import { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import {filterData} from '../utils/helper'
const Body = () => {
  const [dataAPI, setdataAPI] = useState();
  async function callAPI() {
    const data = await fetch("https://api.punkapi.com/v2/beers");
    const json = await data.json();
    setdataAPI(json);
    setFilteredData(json);
  }

  //fetching the API
  useEffect(() => {
    callAPI();
  }, []);

  //Search functionality
  const [searchedKey, setSearchedKey] = useState("");
  const [filteredData, setFilteredData] = useState();

  return filteredData === undefined ? (
    <Shimmer/>
  ) : (
    <>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          setSearchedKey(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setFilteredData(filterData(searchedKey, dataAPI));
        }}
      >
        Search
      </button>

      <Cards cardData={filteredData} />
    </>
  );
};
export default Body;
