import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Headers";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Profile from "./components/Profile";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import { ConfigProvider } from "antd";
import useOnline from "./utils/useOnline";
import Shimmer_UI from "./components/Shimmer_UI";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const AppComponent = () => {
  const offline = useOnline();
  if (!offline) {
    return <h1> Looks like you're Offline, please check your connection</h1>;
  }
  return (
    <>
        <ConfigProvider
      theme={{
        components: {
          // ? Rust Color BC3908 / primary color
          // ? Carrot Color 2B2B2B
          // ? White BG Color EDF2F4
          // ? Black Color 0C120C
          Button: {
            colorPrimary: '#BC3908',
            algorithm: true, 
          },
          Input: {
            colorPrimary: 'blue',
            algorithm: true,
          }
        },
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </ConfigProvider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer_UI/>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element:  (
          <Suspense fallback={<Shimmer_UI/>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart"
      },
      {
        path: "/resturantId/:resid",
        element: <ResturantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
