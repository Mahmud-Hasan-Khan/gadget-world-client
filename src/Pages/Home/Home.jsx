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
            <div className="mx-auto py-0 space-y-6">
                <Helmet>
                    <title>Gadget World :: Home</title>
                </Helmet>
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
                <TopSellingProducts></TopSellingProducts>
                <Payment></Payment>
            </div>
        </div>
    );
};

export default Home;