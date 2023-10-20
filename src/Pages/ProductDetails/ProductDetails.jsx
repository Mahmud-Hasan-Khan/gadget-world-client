import { useLoaderData } from "react-router-dom";
import StarRating from "../../components/StarRating";
import Swal from "sweetalert2";
import { AiOutlineShopping } from 'react-icons/ai';

const ProductDetails = () => {

    const details = useLoaderData();
    console.log(details);
    const { name, brand, type, price, rating, image, short_description } = details;

    const handleAddToCart = () => {
        const cart = { name, brand, type, price, image }

        // send cart data to server
        fetch('https://brandshop-server-rnzf3vrl1-mahmud-hasans-projects.vercel.app/carts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cart)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product added in your cart successfully',
                        showConfirmButton: type,
                        // timer: 1500
                    })
                }
            })
    }

    return (
        <div className="card lg:card-side bg-base-100 border border-orange-100 items-center gap-6 rounded-none">
            <figure><img className="object-cover lg:w-[650px] lg:h-[550px] " src={image} alt="Album" /></figure>
            <div className="space-y-4 my-auto p-2">
                <h2 className="text-xl lg:text-4xl font-medium">{name} </h2>
                <p className="text-xl lg:w-[600px] ">{short_description}</p>
                <p className="text-xl font-semibold">Price : <small className="text-base">{price}</small></p>
                <p className="text-xl font-semibold">Brand : <small className="text-base">{brand}</small></p>
                <p className="text-xl font-semibold">Type : <small className="text-base">{type}</small></p>
                <p className="flex items-center">Rating: <StarRating rating={rating} size={24}></StarRating></p>
                <div className="flex justify-center">
                    <button className="bg-[#00AEEF] hover:bg-[#0395ff] text-white px-3 py-2 rounded-md font-medium flex items-center" onClick={handleAddToCart}>Add To Cart <AiOutlineShopping className="ml-1 text-xl"></AiOutlineShopping> </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;