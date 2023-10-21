import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="flex-grow pt-[13%] md:pt-[7%] lg:pt-[4%] xl:pt-[3%]">
                <Outlet></Outlet>
            </div>
            <Footer className="mt-auto"></Footer>
        </div>
    );
};

export default MainLayout;