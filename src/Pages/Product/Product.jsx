import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import ImageSlider from "../../components/ImageSlider";
import SectionTitle from "../../components/SectionTitle";

const Product = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { brand } = useParams();

    // get product data by bran from database 
    useEffect(() => {
        setLoading(true);
        fetch(`https://brandshop-server-4gads8yj4-mahmud-hasans-projects.vercel.app/products?brand=${brand}`)
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
        <div className="bg-base-200 lg:mt-10">
            <ImageSlider></ImageSlider>
            <SectionTitle heading={`Popular Product by ` + brand} subheading={`Shop Your Desired Product from Featured ` + brand}></SectionTitle>
            {
                loading ? (

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
                )
            }
        </div >
    );
};

export default Product;