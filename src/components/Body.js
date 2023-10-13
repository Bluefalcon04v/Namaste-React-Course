import { resturantListData } from "../config";
import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";


function filterData(searchText, resturants) {
 const filterValue = resturants.filter((value) => 
  value.info.name.includes(searchText)
 )
 return filterValue;
}



const Body = () => {
  const [resturants, setResturants] = useState(resturantListData)
  const [searchText, setSearchText] = useState();

  useEffect(()=>{
    getResturantListData();
  }, []);

  async function getResturantListData(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6286706&lng=77.36402570000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log(json);
    // setResturants(json?.data?.cards)
  }


  return (
    <>
      <div className="searchBarContainer">
        <input type="text" className="searchInput" 
        placeholder="Search"
        value={searchText || ""} 
        onChange={(e) => { setSearchText(e.target.value) }}></input> 
        <button className="searchButton" onClick={() => {
          const data = filterData(searchText, resturants); 
          setResturants(data)
        }
        } >Search</button>
      </div >

      <div className="resturantList">
        {resturants.map((value) => {
          // console.log(value.info)
          return <ResturantCard {...value.info} key={value.info.id} />;
        })}
      </div>
    </>
  )
};

export default Body;
