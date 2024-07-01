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
        Oops! Looks like you are offline. Please check your internet connection.
      </h1>
    );
  return res === null ? (
    <Shimmer />
  ) : (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex justify-center mb-5">
        <input
          type="text"
          className="h-10 w-72 border-2 border-gray-300 p-2 rounded"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="h-10 ml-3 border-2 border-gray-300 bg-gray-100 p-2 rounded hover:bg-gray-200"
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
          className="h-10 ml-3 border-2 border-gray-300 bg-gray-100 p-2 rounded hover:bg-gray-200"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filterres.map((restaurant, index) => (
          <Link
            key={restaurant.info.id || index}
            to={`restaurant/${restaurant.info.id}`}
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
