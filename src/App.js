import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers"; 
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppComponent = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppComponent/>,
    errorElement: <Error/>
  },
  {
    path:"/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
