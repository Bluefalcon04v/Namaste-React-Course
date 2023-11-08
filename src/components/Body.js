import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
import Shimmer_UI from "./Shimmer_UI";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { SWIGGY_RESTAURANTS_LISTS } from "../config";
import {Input, Button, Flex, Space } from "antd";

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
      <Space direction="vertical">
        <Space direction="horizontal">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            onChange={(e)=>{
              setSearchText(e.target.value)
            }}
            size="small"
            onSearch={() => {
              const data = filterData(searchText, allResturants);
              setFilteredResturants(data);
            }}
          />
        </Space>
        <Flex wrap="wrap" gap="middle" justify="center">
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
