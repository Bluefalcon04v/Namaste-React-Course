import { useState } from "react";

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
        <li>About</li>
        <li>Courses</li>
        <li>Blogs</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
      {islogedIn ? <button onClick={()=> setIsLogedIn(false) }>Logout</button> : <button onClick={()=> setIsLogedIn(true)}>Login</button>}
      {/* <button>Login</button>
      <button>Logout</button> */}
    </div>
  )
};

export default Header;