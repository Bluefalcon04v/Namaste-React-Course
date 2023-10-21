import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ResturantItems from "./ResturantItems";

const ResturantMenu = () => {
  const [resturant, setResturant] = useState([]);
  const [resturantMenuItems, setResturantMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { resid } = params;

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=142444&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setResturant(json?.data?.cards[0]?.card?.card?.info);
      const allItems = [];
      json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.forEach(
        (res) => {
          res?.card?.card?.itemCards?.forEach((val) => {
            allItems.push(val?.card?.info);
          });
        }
      );

      setResturantMenuItems(allItems);
      setLoading(false);
    } catch (error) {
      console.log("Fetching Error: ", error);
      setLoading(false);
    }
  }

  return (
    <>
    <div className="resturantMenuMainContainer">
    <img className="itemImageInBg" src={IMG_CDN_URL + resturant?.cloudinaryImageId}></img>
      <div className="resturantMainDetailContainer">
        <img src={IMG_CDN_URL + resturant?.cloudinaryImageId}></img>
        <div>
          <h1>{resturant.name}</h1>
          <h3>{resturant.areaName}, {resturant.city}</h3>
          <h3>{resturant.costForTwoMessage}</h3>
          <h4>{resturant.totalRatingsString}</h4>
          <h1>Resturant id :{resid}</h1>
        </div>
      </div>
      <div className="resturantMenuItemsContainer">
        {loading ? (
          <p>Loading...</p>
        ) : (
          resturantMenuItems.map((item, index) =>  {
            return (<ResturantItems {...item} key={item?.id && index} />)
          })
            )}
      </div>
            {resturantMenuItems.map((item) => console.log(item))}
    </div>
    </>
  );
};

export default ResturantMenu;
