import { Card, Space, Typography } from "antd";
import { IMG_CDN_URL, NOT_FOUND_IMAGE_URL} from "../config";

const { Title, Text } = Typography;
const ResturantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <Card bordered hoverable style={{ width: "320px", height: "420px" }}>
      <img
        style={{ width: "100%", height: "240px", borderRadius: "10px" }}
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Image"
        onError={(e) => {
          (e.target.src =
            NOT_FOUND_IMAGE_URL),
            console.log(e.target);
        }}
      />
      <Space direction="vertical" className="custom">
        <Title level={5}>{name}</Title>
        <Text type="secondary">{cuisines.join(", ")}</Text>
        <Text strong>{avgRating} Stars</Text>
      </Space>
    </Card>
  );
};

export default ResturantCard;
