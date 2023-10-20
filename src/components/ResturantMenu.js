import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
import ResturantItems from "./ResturantItems";

const ResturantMenu = () => {
    const [resturant, setResturant] = useState([])
    const [resturantMenuItems, setResturantMenuItems] = useState([])
    const params = useParams();
    const { resid } = params;

    useEffect(() => {
        getResturantInfo();
    }, [])

    async function getResturantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=51293&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResturant(json?.data?.cards[0]?.card?.card?.info)
        const allItems = [];  // Setting up a constant so that we can populate the values one by one using map 
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.forEach((res) => {
            res?.card?.card?.itemCards?.forEach((val) => {
                allItems.push(val?.card?.info);
            });
        });

        setResturantMenuItems(allItems);
    }


    return (
        <>
            <div>
                <img src={IMG_CDN_URL + resturant?.cloudinaryImageId}></img>
                <h1>{resturant.name}</h1>
                <h3>{resturant.areaName}</h3>
                <h3>{resturant.city}</h3>
                <h3>{resturant.costForTwoMessage}</h3>
                <h4>{resturant.totalRatingsString}</h4>
                <h1>Resturant id :{resid}</h1>
            </div>
            <div className="resturantMenuItems">
                {resturantMenuItems.length > 0 ? ( 
                    resturantMenuItems.map((item, index) => (
                        <ResturantItems {...item} key={item?.id && index} />  // populating the data in the ResturantItems 
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}


export default ResturantMenu;