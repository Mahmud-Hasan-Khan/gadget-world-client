import Marquee from "react-fast-marquee";

const Payment = () => {
    return (
        <div className="shadow-md bg-white rounded">
            <h1 className="text-center text-4xl font-bold pt-6 text-[#00AEEF] ">Payment Methods</h1>
            <h5 className="text-center text-base text-[#ac52b4] font-medium pt-4 pb-6">You can pay now easy way</h5>
            <div className="my-4">
                <Marquee pauseOnHover>
                    <div className="bg-white mx-10">
                        <img src="https://i.ibb.co/Xk030b1/1-removebg-preview.png" alt="" />
                    </div>
                    <div className="bg-white mx-10">
                        <img src="https://i.ibb.co/WksLdpx/3-removebg-preview.png" alt="" />
                    </div>
                    <div className="bg-white mx-8">
                        <img className="mx-auto" src="https://i.ibb.co/jzdnr2v/2-removebg-preview.png" alt="" />

                    </div>
                </Marquee>
            </div>

        </div >
    );
};

export default Payment;