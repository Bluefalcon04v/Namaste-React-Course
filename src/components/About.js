import { Outlet } from "react-router-dom";
import User from "./User";

const About = () => {
    return (
        <>
        <div>
            <h1>About Us Page</h1>
            <User/>
        </div>
        <Outlet/>
        </>
    )
}

export default About;