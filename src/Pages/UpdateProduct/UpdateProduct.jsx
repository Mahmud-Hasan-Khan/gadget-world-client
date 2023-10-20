import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {

    const product = useLoaderData();
    console.log(product);
    const { _id, name, brand, type, price, rating, image } = product;

    const handleUpdateProduct = (e) => {
        e.preventDefault();

        // get data from user input
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = parseFloat(form.price.value);
        const rating = parseFloat(form.rating.value);
        const image = form.image.value;
        // console.log(name, brand, type, price, rating, image);
        const updateProduct = { name, brand, type, price, rating, image }

        // send data to server 
        fetch(`http://localhost:3000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="mt-0">
            <Helmet>
                <title>Gadget World :: Update Product</title>
            </Helmet>

            <div className='py-4 lg:py-16' style={{
                backgroundImage: `url(${"https://i.ibb.co/SXZtJnW/Add-Product-Medium.png"})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: 'full',
            }}>
                <div className="bg-[#d1f2fd] px-4 lg:px-24 py-4 lg:py-6 m-4 lg:mx-28  shadow-2xl rounded-xl">
                    <h2 className="text-5xl font-extrabold text-center text-[#00AEEF] " style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)' }}>Update Product</h2>
                    <p className='my-8  text-xl text-center'>It involves updating essential details such as product name, brand, type, price, rating and image into a database or system.</p>
                    <form onSubmit={handleUpdateProduct}>

                        {/* form Name and Brand Name row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4] ">Product Name</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="name" defaultValue={name} placeholder="Product Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Brand Name</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="brand" defaultValue={brand} placeholder="Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        {/* form Type & Price row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Type</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="type" defaultValue={type} placeholder="Type of Product" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Price</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form image and Rating row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Rating</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Image</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="image" defaultValue={image} placeholder="Image URL of Product" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="btn-block btn bg-[#ad5cb4] text-xl font-medium text-white py-3 rounded-lg hover:bg-[#ac49b5] hover:shadow-lg mb-2" style={{ textTransform: "none" }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;