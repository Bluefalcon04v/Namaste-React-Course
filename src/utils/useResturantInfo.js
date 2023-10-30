

const useResturantInfo = () =>{
    useEffect(() => {
        getResturantInfo();
      }, []);
    
      async function getResturantInfo(resId) {
        try {
          const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
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
          setLoading(true);
        }
      }
}

export default useResturantInfo