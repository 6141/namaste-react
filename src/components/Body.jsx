import { useState } from "react";
import { x } from "../../sample-data";
import { Card } from "./Card";

export const Body = () => {
    let h = x.SECTION_SEARCH_RESULT
    const [res, setRes] = useState(h)
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const y  = x.SECTION_SEARCH_RESULT.filter((item) => 
              item.info.rating.aggregate_rating > 4
            );
            setRes(y)
          }}
        >
          {" "}
          FILTER HERE
        </button>
      </div>
      <div className="card-container">
        {res.map((restaurant, index) => (
          <Card
            key={index}
            name={restaurant.info.name}
            imageUrl={restaurant.info.image.url}
            ratings={restaurant.info.rating.aggregate_rating}
          />
        ))}
      </div>
    </div>
  );
};


