import { Skeleton, Space, Card, Flex } from "antd";

const Shimmer_UI = () => {
  return (
    <>
      <Flex wrap="wrap" gap="middle" justify="center" align="center">
        {Array(20)
          .fill("")
          .map((e, index) => (
            <Flex wrap="wrap" gap="middle" key={index}>
              <Card bordered>
                <Skeleton.Image
                  active
                  style={{
                    width: "240px",
                    height: "200px",
                    marginBottom: "20px",
                  }}
                ></Skeleton.Image>
                <Space style={{ display: "flex", flexDirection: "column" }}>
                  <Skeleton.Input active />
                  <Skeleton.Input active />
                </Space>
              </Card>
            </Flex>
          ))}
      </Flex>
    </>
  );
};

export default Shimmer_UI;
