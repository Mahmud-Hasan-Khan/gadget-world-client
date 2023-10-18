import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center">
            <div className='flex flex-col items-center relative'>
                <Link className="absolute  top-2 md:top-[2%] lg:top-[3%]  bg-[#ad5cb4] font-medium text-white py-3 px-3 rounded-lg hover:bg-[#ac49b5] hover:shadow-lg" to="/" >Back To Home</Link>
                <img className='object-cover w-screen h-screen' src="https://i.ibb.co/XJ0w6kW/404.jpg" alt="404" />
            </div>
        </div>
    );
};

export default ErrorPage;