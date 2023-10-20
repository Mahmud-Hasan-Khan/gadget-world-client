import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Brand from "./Brand";
import TopSellingProducts from "./TopSellingProducts";
import Payment from "./Payment";

const Home = () => {

    const allBrands = useLoaderData();
    // console.log(allBrands);

    return (
        <div className="bg-base-200">
            <div className="mx-auto max-w-screen-xl py-4 space-y-6">
                <Helmet>
                    <title>Gadget World :: Home</title>
                </Helmet>
                Home
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center mx-auto">
                    {
                        allBrands.map(branData => <Brand key={branData._id} branData={branData} ></Brand>)
                    }
                </div>
                <TopSellingProducts></TopSellingProducts>
                <Payment></Payment>
            </div>
        </div>
    );
};

export default Home;