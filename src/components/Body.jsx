import { useState } from "react";
import { Card } from "./Card";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../hooks/useResData";
import { useOnlineStatus } from "../hooks/useOnlinestatus";

export const Body = () => {
  const { res, filterres, setFilterres } = useFetchRestaurants();
  const [searchText, setSearchText] = useState("");
  const status = useOnlineStatus();

  if (!status)
    return (
      <h1>
        Oops! Looks like you are offline.please check your internet connection
      </h1>
    );
  return res === null ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-section">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-button"
          onClick={() => {
            const filtered = res.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterres(filtered);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filtered = res.filter(
              (restaurant) => restaurant.info.avgRating > 4.3
            );
            setFilterres(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-grid">
        {filterres.map((restaurant, index) => (
          <Link
            key={restaurant.info.id || index}
            to={`restuarant/${restaurant.info.id}`}
          >
            <Card
              name={restaurant.info.name}
              imageUrl={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`}
              ratings={restaurant.info.avgRating}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
