import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Shimmer } from "./shimmer";

export const Body = () => {
  const [res, setRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterres, setFilterres] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    return data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setRes(data);
      setFilterres(data);
    });
  }, []);

  return res.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search"
          onClick={() => {
            const x = res?.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );

            setFilterres(x)
          }}
        >
          search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            const filter = res?.filter((restaurant, index) => {
              restaurant.info.name > 4;
              setRes(filter);
            });
          }}
        >
          {" "}
          Top Rated Restuarants
        </button>
      </div>
      <div className="card-container">
        {filterres.length > 0 &&
          filterres?.map((restaurant, index) => (
            <Card
              key={restaurant.info.id || index}
              name={restaurant.info.name}
              imageUrl={
                "https://media-assets.swiggy.com/swiggy/image/upload/" +
                restaurant.info.cloudinaryImageId
              }
              ratings={restaurant.info.avgRatingString}
            />
          ))}
      </div>
    </div>
  );
};
