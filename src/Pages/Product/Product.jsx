import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import ImageSlider from "../../components/ImageSlider";

const Product = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { brand } = useParams();

    // get product data by bran from database 
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:3000/products?brand=${brand}`)
            .then(res => res.json())
            .then(data => {
                setLoadedProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error fetch data', error);
            })
    }, [brand]);

    return (
        <div className="bg-base-200 max-h-screen">
            <ImageSlider></ImageSlider>
            <h1 className="text-center text-5xl font-bold pt-6 text-[#00AEEF] ">Popular Product by {brand}</h1>
            <h5 className="text-center text-lg text-[#ac52b4] font-medium pt-4 pb-6">Shop Your Desired Product from Featured {brand} </h5>
            {loading ? (
                // <span className="loading loading-infinity loading-lg text-white "></span>
                <div className="min-h-screen flex items-center justify-center">
                    <span className="loading loading-infinity loading-lg text-[#00AEEF]"></span>
                </div>
            ) : loadedProducts.length === 0 ? (
                <div className="flex items-center justify-center my-auto py-40">
                    <h1 className="text-[#ad5cb4] text-4xl font-medium">{brand} Product Will Be Available Soon...</h1>
                </div>

            ) : (
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-base-200">
                    {
                        loadedProducts.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                    }
                </div>
            )}
        </div>
    );
};

export default Product;