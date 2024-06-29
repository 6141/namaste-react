import { useEffect, useState } from "react";
import { Card } from "./Card";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
 
export const Body = () => {
  const [res, setRes] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterres, setFilterres] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await response.json();
    return data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setRes(data);
      setFilterres(data);
    });
  }, []);

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
              restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterres(filtered);
          }}
        >
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => {
            const filtered = res.filter((restaurant) => restaurant.info.avgRating > 4.3);
            setFilterres(filtered);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-grid">
        { filterres.map((restaurant, index) => (
            <Link  key={restaurant.info.id || index} to={`restuarant/${restaurant.info.id}`}>
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
