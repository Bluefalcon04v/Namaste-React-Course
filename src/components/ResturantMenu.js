import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config"

const ResturantMenu = () => {
    const [resturant, setResturant] = useState({})
    const [resturantMenu, setResturantMenu] = useState({})
    const params = useParams();
    const { resid } = params;

    useEffect(() => {
        getResturantInfo();
    }, [])

    async function getResturantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=51293&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json()
        setResturant(json.data?.cards[0]?.card?.card?.info)
        setResturantMenu(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards)
        console.log(json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards.map((res)=>{
            console.log(res?.card?.card?.itemCards);
        }))
    }

    return (
        <>
            <div>
                <img src={IMG_CDN_URL + resturant?.cloudinaryImageId}></img>
                {/* {resturantMenu.map((res)=>{
                    console.log(res)
                })
                } */}
                <h1>{resturant.name}</h1>
                <h3>{resturant.areaName}</h3>
                <h3>{resturant.city}</h3>
                <h3>{resturant.costForTwoMessage}</h3>
                <h4>{resturant.totalRatingsString}</h4>
                <h1>Resturant id :{resid}</h1>
            </div>
        </>
    )
}


export default ResturantMenu;