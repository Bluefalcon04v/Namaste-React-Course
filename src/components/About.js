import { Outlet } from "react-router-dom";
import useOnline from "../utils/useOnline";

const About = () => {
    const offline = useOnline();

  if(!offline){
    return <h1> Offline, please check your connection</h1>
  }
    return (
        <>
        <div>
            <h1>About Us Page</h1>
        </div>
        <Outlet/>
        </>
    )
}

export default About;