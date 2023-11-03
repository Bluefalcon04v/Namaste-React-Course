import { useState, useEffect } from "react";

export const useResturantInfo = (resid) => {
  const [resturant, setResturant] = useState([null]);
  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setResturant(json?.data?.cards[0]?.card?.card?.info);
  }
  return resturant;
};
