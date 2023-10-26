import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";

const AppComponent = () => (
  <>
    <Header />
    <Outlet /> 
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children:[
          {
            path: "profile",
            element: <Profile/>
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resturantId/:resid",
        element: <ResturantMenu />
      }
    ],
  }])

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<RouterProvider router={appRouter} />);
