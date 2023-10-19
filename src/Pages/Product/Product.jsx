import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Product = () => {
    const [loadedProducts, setLoadedProducts] = useState([]);
    const { brand } = useParams();
    // console.log(params);

    // get product data by bran from database 
    useEffect(() => {
        fetch(`http://localhost:3000/products?brand=${brand}`)
            .then(res => res.json())
            .then(data =>
                setLoadedProducts(data)
            )
            .catch((error) => console.error('Error fetch data', error))

    }, [brand]);

    return (
        <div>
            <h1>Popular Product by {brand}</h1>
        </div>
    );
};

export default Product;