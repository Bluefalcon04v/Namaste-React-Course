import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Headers"; 
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

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

const AppComponent = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<AppComponent />);
