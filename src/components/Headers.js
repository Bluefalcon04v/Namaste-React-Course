import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Flex, Image, List } from "antd";

const Title = () => (
  <a href="/">
    <Image preview={false} style={{width:"140px", height:"auto"}}
      src="https://etimg.etb2bimg.com/photo/63298781.cms"
      alt="logo Image"
    />
  </a>
);


const Header = () => {
  const [islogedIn, setIsLogedIn] = useState(true)

  return (
    <>
    <Flex gap="middle" style={{padding:"0 20px", position:"relative", zIndex:"1", background:"white"}} horizontal="true" justify="space-between" align="center" >
      <Title />
        <List.Item style={{display:"flex", alignItems:"center", padding:"20px", gap:"40px"}}>
          <List> <Link to={"/"}>Home</Link></List>
          <List> <Link to={"/about"}>About</Link></List>
          <List> <Link to={"/contact"}>Contact</Link></List>
          <List> <Link to={"/cart"}>Cart</Link></List>
        </List.Item>
      {islogedIn? <Button style={{width:"80px"}} onClick={()=> setIsLogedIn(false) }>Logout</Button> : <Button type="primary" style={{width:"80px"}} onClick={()=> setIsLogedIn(true)}>Login</Button>}
    </Flex>
    </>
  )
};

export default Header;