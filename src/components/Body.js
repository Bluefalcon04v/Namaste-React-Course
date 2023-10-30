import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer_UI from "./Shimmer_UI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";


const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getResturantListData();

  }, []);

  async function getResturantListData() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6286706&lng=77.36402570000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const JSON = await data.json();
      setAllResturants(
        JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResturants(
        JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log({ error });
    }
  }
  if (!allResturants) return null;

  return allResturants?.length === 0 ? (
    <Shimmer_UI />
  ) : (
    <>
      <div className="searchBarContainer">
        <input
          type="text"
          className="searchInput"
          placeholder="Search"
          value={searchText || ""}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="searchButton"
          onClick={() => {
            const data = filterData(searchText, allResturants);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="resturantList">
        {filteredResturants.map((value) => {
          return (
            <Link to={"/resturantId/" + value.info.id} key={value.info.id}>
              <ResturantCard {...value.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
