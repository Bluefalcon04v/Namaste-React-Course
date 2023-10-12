import { resturantListData } from "../config";
import ResturantCard from "./ResturantCard";
import { useState } from "react";


function filterData(searchText, resturants) {
 const filterValue = resturants.filter((value) => 
  value.info.name.includes(searchText)
 )
 return filterValue;
}


const Body = () => {
  const [resturants, setResturants] = useState(resturantListData)

  const [searchText, setSearchText] = useState();
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
          console.log(data.length);

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
