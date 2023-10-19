import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        // get data from user input
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = parseFloat(form.price.value);
        const description = form.description.value;
        const rating = parseFloat(form.rating.value);
        const image = form.image.value;
        console.log(name, brand, type, price, description, rating, image);
        const product = { name, brand, type, price, description, rating, image }

        // send data to server 
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }

    return (
        <div className="mt-0">
            <Helmet>
                <title>Gadget World :: AddProduct</title>
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
                    <h2 className="text-5xl font-extrabold text-center text-[#00AEEF] " style={{ textShadow: '4px 4px 6px rgba(0, 0, 0, 0.1)' }}>Add Product</h2>
                    <p className='my-8  text-xl text-center'>It involves inputting essential details such as product name, description, price, and image into a database or system. This process ensures that the product is accurately represented and available for purchase, streamlining the customer's shopping experience.</p>
                    <form onSubmit={handleAddProduct}>

                        {/* form Name and Brand Name row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4] ">Product Name</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2 ">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Brand Name</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered w-full" />
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
                                    <input type="text" name="type" placeholder="Type of Product" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Price</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Short description and Rating row */}
                        <div className="md:flex gap-4 mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Short description</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Rating</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        {/* form Image url row */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="text-xl font-medium text-[#ad5cb4]">Image</span>
                                </label>
                                <label className="rounded">
                                    <input type="text" name="image" placeholder="Image URL of Product" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Add Product" className="btn-block btn bg-[#ad5cb4] text-xl font-medium text-white py-3 rounded-lg hover:bg-[#ac49b5] hover:shadow-lg mb-2" style={{ textTransform: "none" }} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;