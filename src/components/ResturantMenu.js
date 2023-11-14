import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ResturantItems from "./ResturantItems";
import Shimmer_UI from "./Shimmer_UI";
import {
  useResturantInfo,
  useResturantMenuItems,
} from "../utils/useResturantInfo";
import { Typography, Flex, Space } from "antd";

const ResturantMenu = () => {
  const [resturantMenuItems, setResturantMenuItems] = useState([null]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { resid } = params;
  const { Title, Text } = Typography;
  useEffect(() => {
    getResturantInfo();
  }, []);

  // ! To DO --- Implement getResturantInfo as a custom hook
  // ! To DO --- Implement getResturantListData as a custom hook
  // ! To DO --- Make the Offline Page UI

  async function getResturantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6286706&lng=77.36402570000001&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      const allItems = [];
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.forEach(
        (res) => {
          res?.card?.card?.itemCards?.forEach((val) => {
            allItems.push(val?.card?.info);
          });
        }
      );

      setResturantMenuItems(allItems);
      setLoading(false);
    } catch (error) {
      console.log("Fetching Error: ", error);
      setLoading(true);
    }
  }

  const resturant = useResturantInfo(resid);
  return (
    <>
      {loading ? (
        <Shimmer_UI />
      ) : (
        <>
          <div>
            <img
              className="itemImageInBg"
              src={IMG_CDN_URL + resturant?.cloudinaryImageId}
            ></img>
            <Flex justify="center" align="center">
              <Space
                hoverable="false"
                style={{
                  margin: "20px",
                  height: "auto",
                  position: "relative",
                  background: "white",
                  borderRadius: "12px",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "20px",
                  }}
                  src={IMG_CDN_URL + resturant?.cloudinaryImageId}
                />
                <div className="custom" style={{ margin: "20px" }}>
                  <Title level={1}>{resturant?.name}</Title>
                  <Title
                    style={{ marginTop: "0px" }}
                    level={4}
                    type="secondary"
                    strong
                  >
                    {resturant?.areaName}, {resturant?.city}
                  </Title>
                  <Title style={{ marginTop: "0px" }} level={4} strong>
                    {resturant?.costForTwoMessage}
                  </Title>
                  <Text strong>{resturant?.totalRatingsString}</Text>
                </div>
              </Space>
            </Flex>
            <Flex wrap="wrap" gap="middle" justify="center">
              {resturantMenuItems.map((item, index) => {
                return <ResturantItems {...item} key={item?.id && index} />;
              })}
            </Flex>
          </div>
        </>
      )}
    </>
  );
};

export default ResturantMenu;
