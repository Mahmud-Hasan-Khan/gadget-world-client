import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import TopSellingProducts from "./TopSellingProducts";
import Payment from "./Payment";
import { useState } from "react";

const Home = () => {
    const allBrands = useLoaderData();

    const [theme, setTheme] = useState('light');
    const changeTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // console.log(allBrands);

    return (
        <div className={`theme-${theme}`}>
            <style>
                {`
      /* Light theme */
      .theme-light {
        background-color: #ffffff;
        color: #000000;
      }

      /* Dark theme */
      .theme-dark {
        background-color: #000000;
        color: #ffffff;
      }
    `}
            </style>
            <div className="mx-auto py-0 space-y-6 relative">
                <Helmet>
                    <title>Gadget World :: Home</title>
                </Helmet>
                <div className="absolute top-2 right-1">
                    <button
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded"
                        onClick={changeTheme}
                    >
                        {theme === 'light' ? 'Dark Theme' : 'Light Theme'}
                    </button>
                </div>

                <div>
                    <img className="object-cover" src="https://i.ibb.co/QFkTLjB/banner-big.png" alt="" />
                </div>
                <div>
                    <h1 className="text-center text-4xl font-bold pt-6 text-[#00AEEF] ">World Famous Brand</h1>
                    <h5 className="text-center text-base text-[#ac52b4] font-medium pt-4 pb-6">Shop Your Desired Product from Brand </h5>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center mx-auto">
                        {
                            allBrands.map(branData => <Brand key={branData._id} branData={branData} ></Brand>)
                        }
                    </div>
                </div>
                <TopSellingProducts theme={theme}></TopSellingProducts>
                <Payment theme={theme}></Payment>
            </div>
        </div>
    );
};

export default Home;