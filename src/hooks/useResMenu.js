import { useEffect, useState } from "react";

export const useResMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchResdata();
  }, []);

  const fetchResdata = async () => {
    const res = await fetch(
      `/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.9692624&lng=79.59263039999999&restaurantId=${resId}&catalog_qa=undefined`
    );
    const json = await res.json();
    setResinfo(json.data);
  };
  return resinfo
};
