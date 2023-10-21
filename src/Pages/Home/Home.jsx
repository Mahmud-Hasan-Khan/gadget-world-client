import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import TopSellingProducts from "./TopSellingProducts";
import Payment from "./Payment";
import { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import TopProducts from "../../components/TopProducts";

const Home = () => {
    const allBrands = useLoaderData();

    // const [theme, setTheme] = useState('light');
    // const changeTheme = () => {
    //     if (theme === 'light') {
    //         setTheme('dark');
    //     } else {
    //         setTheme('light');
    //     }
    // }

    // console.log(allBrands);

    return (
        <div >
            <Helmet>
                <title>Gadget World :: Home</title>
            </Helmet>

            <div className="mx-auto py-0 space-y-2 relative">
                <div className="absolute top-2 right-1">
                    {/* <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                        onClick={changeTheme}
                    >
                        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </button> */}
                </div>

                <div className="max-w-full mx-auto">
                    <img className="object-cover w-full" src="https://i.ibb.co/QFkTLjB/banner-big.png" alt="" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <SectionTitle subheading={"Shop Your Desired Product from Brand"} heading={"World Famous Brand"} ></SectionTitle>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center mx-auto shadow-xl rounded-lg py-6 mb-6 border">
                        {
                            allBrands.map(branData => <Brand key={branData._id} branData={branData} ></Brand>)
                        }
                    </div>
                    <TopProducts></TopProducts>
                    {/* <TopSellingProducts ></TopSellingProducts> */}
                    <Payment></Payment>
                </div>
            </div>
        </div>
    );
};

export default Home;