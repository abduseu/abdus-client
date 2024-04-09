import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer2 from "./Footer2";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer2></Footer2>
        </div>
    );
};

export default Root;