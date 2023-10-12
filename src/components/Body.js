import { resturantListData } from "../config";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

//  Every Hooks in react is just a like a preDefined functions 
// useState takes two arrays and first value is for decleration and second value is for assigning new value to it
const Body = () => {
  const [searchText, setSearchText] = useState(); // React uses two way data binding one for getting and other one is for providing it back 
  return (
  <>
    <div className="searchBarContainer">
      <input type="text" className="searchInput" placeholder="Search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input> {/* e.target.value takes the input provided inside the input tag */}
      <button className="searchButton" >Search</button>
      {console.log(searchText)}
    </div>

    <div className="resturantList">
      {resturantListData.map((value) => {
        return <ResturantCard {...value.info} key={value.info.id} />;
      })}
    </div>
  </>
  )
};

export default Body;
