import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://etimg.etb2bimg.com/photo/63298781.cms"
      alt="logo Image"
    />
  </a>
);


const Header = () => {
  const [islogedIn, setIsLogedIn] = useState(true)

  return (
    <div className="listContainer">
      <Title />
      <ul>
        <li> <Link to={"/"}>Home</Link></li>
        <li> <Link to={"/about"}>About</Link></li>
        <li> <Link to={"/contact"}>Contact</Link></li>
        <li> <Link to={"/cart"}>Cart</Link></li>
      </ul> 
      {islogedIn ? <button onClick={()=> setIsLogedIn(false) }>Logout</button> : <button onClick={()=> setIsLogedIn(true)}>Login</button>}
    </div>
  )
};

export default Header;