import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer_UI from "./Shimmer_UI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { SWIGGY_RESTAURANTS_LISTS } from "../config";
import { Input, Button, Flex, Space } from "antd";

const Body = () => {
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { Search } = Input;
  useEffect(() => {
    getResturantListData();
  }, []);
  async function getResturantListData() {
    try {
      const data = await fetch(SWIGGY_RESTAURANTS_LISTS);
      const JSON = await data.json();
      setAllResturants(
        JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
          );
      setFilteredResturants(
        JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log({ error });
    }
  }
  console.log("allResturants",filteredResturants)

  if (!allResturants) return null;
  return allResturants?.length === 0 ? (
    <Shimmer_UI />
  ) : (
    <>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space
          direction="horizontal"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Search placeholder="input search restaurants"
            allowClear
            enterButton="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            size="medium"
            onSearch={() => {
              // const data = filterData(searchText, allResturants);
              // setFilteredResturants(data);
              {
                filterData(searchText, allResturants) ? (
                  setFilteredResturants(filterData(searchText, allResturants))
                ) : (
                    console.log(first)
                    
                );
              }
          }}/>
        </Space>
        <Flex wrap="wrap" gap="middle" justify="space-evenly" >
          {filteredResturants.map((value) => {
            return (
              <Link to={"/resturantId/" + value.info.id} key={value.info.id}>
                <ResturantCard {...value.info} />
              </Link>
            );
          })}
        </Flex>
      </Space>
    </>
  );
};

export default Body;
