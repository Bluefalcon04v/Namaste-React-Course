import { Outlet } from "react-router-dom";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <>
        <div>
            <h1>About Us Page</h1>
            <User name={"Sam"} occupation={"Dev."} city={"Noida"}/>
            {/* <UserClass name={"Bruce"} occupation={"Ui/Ux"} city={"Delhi"}/> */}
        </div>
        <Outlet/>
        </>
    )
}

export default About;