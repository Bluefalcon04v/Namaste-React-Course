import { Card, Space, Typography } from "antd";
import { IMG_CDN_URL, NOT_FOUND_IMAGE_URL } from "../config";

const { Title, Text } = Typography;
const ResturantItems = ({ name, category, description, imageId, price }) => {
  return (
    <Card
      // bordered
      bordered={{ backgroundColor: "#a9bbff" }}
      color="white"  
      hoverable
      style={{ width: "320px", maxHeight: "fit-content", minHeight: "400px" }}
    >
      <img
        style={{ width: "100%", height: "240px", borderRadius: "10px" }}
        src={IMG_CDN_URL + imageId}
        alt="Image"
        onError={(e) => {
          (e.target.src =
            NOT_FOUND_IMAGE_URL),
            console.log(e.target);
        }}
      />
      <Space direction="vertical">
        <Title level={5}>{name}</Title>
        <Text>{category}</Text>
        <Text type="secondary">{description}</Text>
        <Text strong>&#8377; {price / 100}</Text>
      </Space>
    </Card>
  );
};

export default ResturantItems;
