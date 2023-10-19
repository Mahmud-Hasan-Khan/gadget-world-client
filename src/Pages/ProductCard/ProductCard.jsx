import { FcViewDetails } from "react-icons/fc";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
    const { _id, name, brand, type, price, rating, image } = product;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl border border-[#a0d3e7]">
            <figure><img className="object-cover w-[360px] h-[300px]" src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>Brand : {brand}</p>
                <p>Type of Product : {type}</p>
                <p>Price : ${price}</p>
                <p className="flex items-center">Rating: <StarRating rating={rating} size={24}></StarRating></p>
                <div className=" flex gap-1  justify-evenly">
                    <Link className="bg-[#ad5cb4] hover:bg-orange-600 flex items-center text-white font-medium rounded p-1" to={`/productDetails/${_id}`} >View Details <FcViewDetails /></Link>
                    <Link className="bg-[#00AEEF] hover:bg-orange-600 flex items-center text-white font-medium rounded p-2" to={`/productUpdate/${_id}`} >Update  <MdModeEdit className="ml-1" /></Link>
                </div>
            </div>
        </div>
    );
};
ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
    rating: PropTypes.number,
    size: PropTypes.number
}
export default ProductCard;