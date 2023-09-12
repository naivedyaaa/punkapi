import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
Cards = (props) => {
  return(
    <div className="cards">
      {props.cardData.map((e, index) => {
        return (
          <Link to={"/beer/"+e.id} key={e.id}>
          <div className="card">
            <img src={e.image_url} alt="Photo" />
            <h3>{e.name}</h3>
            <p>{e.tagline}</p>
            <p>Volume - {e.volume.value+" "+e.volume.unit}</p>
          </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Cards;