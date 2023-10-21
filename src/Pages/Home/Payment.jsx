
import Marquee from "react-fast-marquee";
import SectionTitle from "../../components/SectionTitle";

const Payment = ({ theme }) => {
    return (
        <div className={`shadow-xl rounded-lg py-6 mb-6 border border-[#a0d3e7] theme-${theme}`}>
            <SectionTitle heading={"Payment Methods"} subheading={"You can pay now more easy way"}></SectionTitle>

            <div className="my-4 ">
                <Marquee pauseOnHover>
                    <div className={`bg-base-100 mx-10 theme-${theme}`}>
                        <img src="https://i.ibb.co/Xk030b1/1-removebg-preview.png" alt="" />
                    </div>
                    <div className={`bg-base-100 mx-10 theme-${theme}`}>
                        <img src="https://i.ibb.co/WksLdpx/3-removebg-preview.png" alt="" />
                    </div>
                    <div className={`bg-base-100 mx-8 theme-${theme}`}>
                        <img className="mx-auto" src="https://i.ibb.co/jzdnr2v/2-removebg-preview.png" alt="" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Payment;
