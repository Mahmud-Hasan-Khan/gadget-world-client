import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const details = useLoaderData();
    console.log(details);
    const { _id, name, brand, type, price, rating, image } = details;

    return (
        <div>

        </div>
    );
};

export default ProductDetails;