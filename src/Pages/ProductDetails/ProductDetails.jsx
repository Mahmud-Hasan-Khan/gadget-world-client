import { Link, useLoaderData } from "react-router-dom";
import StarRating from "../../components/StarRating";


const ProductDetails = () => {

    const details = useLoaderData();
    console.log(details);
    const { _id, name, brand, type, price, rating, image, short_description } = details;

    return (
        <div className="card lg:card-side bg-base-100 border border-orange-100 items-center gap-6 rounded-none">
            <figure><img className="object-cover lg:w-[650px] lg:h-[550px] " src={image} alt="Album" /></figure>
            <div className="space-y-4 my-auto px-2">
                <h2 className="text-xl lg:text-4xl font-medium">{name} </h2>
                <p className="text-xl lg:w-[600px] ">{short_description}</p>
                <p className="text-xl font-semibold">Price : <small className="text-base">{price}</small></p>
                <p className="text-xl font-semibold">Brand : <small className="text-base">{brand}</small></p>
                <p className="text-xl font-semibold">Type : <small className="text-base">{type}</small></p>
                <p className="flex items-center">Rating: <StarRating rating={rating} size={24}></StarRating></p>
                <div>
                    <Link>Add to Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;