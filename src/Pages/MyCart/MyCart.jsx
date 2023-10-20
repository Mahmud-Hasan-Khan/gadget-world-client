import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import { UserContext } from "../../Provider/AuthProviders";

const MyCart = () => {
    // const loadedCarts = useLoaderData();
    const { loggedInUser } = useContext(UserContext);
    const { email } = loggedInUser;
    // console.log(email);
    const [carts, setCarts] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(carts);

    useEffect(() => {
        setLoading(true);
        fetch(`https://brandshop-server-4gads8yj4-mahmud-hasans-projects.vercel.app/carts?email=${email}`)
            .then(res => res.json())
            .then(data => {
                setCarts(data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Error fetch data', error);
            })
    }, [email])

    const handleDeleteCart = (id) => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('delete conform');
                // delete single api data from server
                fetch(`https://brandshop-server-4gads8yj4-mahmud-hasans-projects.vercel.app/carts/${id} `,
                    {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected product has been deleted.',
                                'success'
                            )
                            // update state
                            const remaining = carts.filter(cart => cart._id !== id);
                            setCarts(remaining)
                        }
                    })
            }
        })
    }

    let serial = 1;

    return (
        <div>
            <Helmet>
                <title>Gadget World :: MyCart</title>
            </Helmet>
            <h1 className="text-center text-5xl font-bold pt-6 text-[#00AEEF] ">Your added products</h1>
            <h5 className="text-center text-lg text-[#ac52b4] font-medium pt-4 pb-6">Shop Your Desired Product from Here</h5>
            <div className="max-w-5xl mx-auto">
                <h4 className="text-center text-lg text-[#ac52b4] font-medium">Total Product {carts.length}</h4>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="bg-[#00AEEF] text-white text-base font-normal ">
                                <th>Serial</th>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                carts.map(cart => <tr key={cart._id}>
                                    <th>{serial++}</th>
                                    <td>{cart.name}</td>
                                    <td>{cart?.type}</td>
                                    <td>${cart?.price}</td>
                                    <td><button onClick={() => handleDeleteCart(cart._id)} className="bg-red-500 hover:bg-[#00AEEF] p-2 rounded"> <MdOutlineDeleteOutline className="text-xl text-white"></MdOutlineDeleteOutline> </button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;