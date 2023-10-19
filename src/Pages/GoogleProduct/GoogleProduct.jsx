import { useLoaderData } from "react-router-dom";


const GoogleProduct = () => {

    const googleProducts = useLoaderData();
    console.log(googleProducts);

    return (
        <div>
            GoogleProduct{googleProducts.length}
        </div>
    );
};

export default GoogleProduct;