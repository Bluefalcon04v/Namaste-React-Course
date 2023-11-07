import { Card } from "antd";
import { IMG_CDN_URL } from "../config";

const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <Card
      bordered
      color="red"
      hoverable
      style={{ width: "320px", height:"420px" , backgroundColor:"red"}}
    >
      <img
        style={{width:"100%", height:"200px", borderRadius:"10px"}}
        src={
            IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="Image"
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Stars</h5>
    </Card>
  );
};

export default ResturantCard;
