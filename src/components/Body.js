import { resturantListData } from "../config";
import ResturantCard from "./ResturantCard";

const searchText = "KFC" // In react we dont use these methods to store the variables because the rerender the component every time they get updated
const Body = () => (
<>
    <div className="searchBar">
      <input type="text" className="searchInput" placeholder="Search" value={searchText} onChange={(e)=>console.log(e.target.value)}></input>
      <button className="searchButton" >Search</button>
    </div>

    <div className="resturantList">
      {resturantListData.map((value) => {
        return <ResturantCard {...value.info} key={value.info.id} />;
      })}
    </div>
  </>
);

export default Body;
