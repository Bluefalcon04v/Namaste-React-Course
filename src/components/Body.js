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
  const [resturants, setResturants] = useState([])
  const [searchText, setSearchText] = useState();

  useEffect(() => {
    getResturantListData();
  }, []); // when it will load it will call the the method inside it only once

  async function getResturantListData() { // feching the APIs
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6286706&lng=77.36402570000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const JSON = await data.json();
    setResturants(JSON?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants);  // Settin up the data 
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
          return <ResturantCard {...value.info} key={value.info.id} />;
        })}
      </div>
    </>
  )
};

export default Body;
