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


// export const useResturantMenuItems = (resid) =>{
//   const [loading, setLoading] = useState(true);
//   const [resturantMenuItems,setResturantMenuItems] = useState([null])
//   useEffect(() => {
//     getResturantMenuInfo();
//   }, []);
//   async function getResturantMenuInfo() {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
//       );
//       const json = await data.json();
//       const allItems = [];
//       json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.forEach(
//         (res) => {
//           res?.card?.card?.itemCards?.forEach((val) => {
//             allItems.push(val?.card?.info);
//           });
//         }
//       );

//       setResturantMenuItems(allItems);
//       setLoading(false);
//       return loading;
//     } catch (error) {
//       console.log("Fetching Error: ", error);
//       setLoading(true);
//     }
//   } 
//   return resturantMenuItems;
// }