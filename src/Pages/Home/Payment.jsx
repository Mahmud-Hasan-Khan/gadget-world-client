
import Marquee from "react-fast-marquee";

const Payment = ({ theme }) => {
    return (
        <div className={`shadow-md bg-white rounded theme-${theme}`}>
            <h1 className={`text-center text-4xl font-bold pt-6 text-${theme === 'dark' ? 'white' : '#00AEEF'}`}>Payment Methods</h1>
            <h5 className={`text-center text-base text-${theme === 'dark' ? 'gray-400' : '#ac52b4'} font-medium pt-4 pb-6`}>You can pay now easy way</h5>
            <div className="my-4">
                <Marquee pauseOnHover>
                    <div className={`bg-base-200 mx-10 theme-${theme}`}>
                        <img src="https://i.ibb.co/Xk030b1/1-removebg-preview.png" alt="" />
                    </div>
                    <div className={`bg-base-200 mx-10 theme-${theme}`}>
                        <img src="https://i.ibb.co/WksLdpx/3-removebg-preview.png" alt="" />
                    </div>
                    <div className={`bg-base-200 mx-8 theme-${theme}`}>
                        <img className="mx-auto" src="https://i.ibb.co/jzdnr2v/2-removebg-preview.png" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Payment;
