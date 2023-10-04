import React from "react";
import ReactDOM from "react-dom/client";

/* 
todo Header
*       - Logo
*       - List
*       - Cart
todo body
*       - Banner Image
            - Heading 
            - Decription
*       - About US Overview
            - Description
            - Readme button
*       - Our Product
            - product cards
                - Image 
                - Name 
*       - Testimonials
            - Image
            - Name
            - Country
            - Message
            - Ratings
*       - Blogs Overview
            - Blog Cards
                - Images
                - Title
                - Description
                - Readme button
*       - Contact Form
todo footer 
*   - Links 
*/

// ---------------------------------------------------------------- Header
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://etimg.etb2bimg.com/photo/63298781.cms"
      alt="logo Image"
    />
  </a>
);

const Header = () => (
  <>
    <div className="listContainer">
      <Title />
      <ul>
        <li>About</li>
        <li>Courses</li>
        <li>Blogs</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  </>
);

// ---------------------------------------------------------------- Body

const burgerKing = { 
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ykoshijaxlbqjtvcnlju",
    name: "Burger King",
    cusines: ["Pizza", "Burger"],
    rating: "4.3"
}

const ResturantCard = () => {
  return (
    <div className="card">
      <img
        src={burgerKing.image}
        alt=""
      />
      <h2>{burgerKing.name}</h2>
      <h3>{burgerKing.cusines.join(",  ")}</h3>
      <h5>{burgerKing.rating} Stars</h5>
    </div>
  );
};

const Body = () => (
  <div className="resturantList">
    <ResturantCard />
    <ResturantCard />
    <ResturantCard />
    <ResturantCard />
  </div>
);
// ---------------------------------------------------------------- Footer
const Footer = () => (
  <>
    <h1>Footer</h1>
  </>
);

const AppComponent = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppComponent />);
