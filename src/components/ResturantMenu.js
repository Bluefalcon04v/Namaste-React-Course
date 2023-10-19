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
        // json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((res) => {
        //     res?.card?.card?.itemCards?.map((val) => {
        //         setResturantMenuItems(val?.card)
        //         // setResturantMenuItems(val)
        //         console.log(val.card);
        //     })
        //     // console.log(resturantMenuItems)
        // })
        setResturantMenuItems(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((res) => {
            res?.card?.card?.itemCards?.map((val) => {
                val?.card
            })
        }))
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
            {/* <div className="resturantMenuItems" key={resturantMenuItems?.info?.id}> */}
            <div className="resturantMenuItems">

                {/* <ResturantItems {...resturantMenuItems?.info} key={resturantMenuItems?.info?.id}/> */}
                {
                    resturantMenuItems.map((value)=>{
                        return  <ResturantItems {...value?.info} key={value?.info?.id}/> 
                    })

                }
            </div>
        </>
    )
}


export default ResturantMenu;