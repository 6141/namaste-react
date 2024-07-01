import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  const [res, setRes] = useState(null);
  const [filterres, setFilterres] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "dapi/restaurants/list/v5?lat=17.9692624&lng=79.59263039999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    return data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  };

  useEffect(() => {
    fetchData().then((data) => {
      setRes(data);
      setFilterres(data);
    });
  }, []);

  return { res, filterres, setFilterres };
};

export default useFetchRestaurants;
