import { Card, Space, Typography } from "antd";
import { IMG_CDN_URL, NOT_FOUND_IMAGE_URL } from "../config";

const { Title, Text } = Typography;
const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating, areaName }) => {
  return (
    <Card
      className="custom"
      bordered
      hoverable
      style={{
        backgroundColor: "var(--Card-Color)",
        width: "360px",
        height: "460px",
        border: "2.2px solid black",
      }}
    >
      <img
        style={{ width: "100%", height: "240px", borderRadius: "10px" }}
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Image"
        onError={(e) => {
          (e.target.src = NOT_FOUND_IMAGE_URL), console.log(e.target);
        }}
      />
      <Space direction="vertical" className="custom">
        <Title level={5}>{name}</Title>
        <Text type="secondary">{cuisines.join(", ")}</Text>
        <Text type="secondary">Location - {areaName}</Text>
        <Text strong>{avgRating} Stars</Text>
      </Space>
    </Card>
  );
};

export default ResturantCard;
