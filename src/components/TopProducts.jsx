import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { AiOutlineShopping } from 'react-icons/ai';
import SectionTitle from './SectionTitle';

const products = [
    {
        title: "Phone 15",
        price: 908,
        description: "Introducing the Apple iPhone 15 Pro, a masterpiece in the world of smartphones.",
        image: "https://i.ibb.co/RgqxMZk/iphone-15-pro-finish-select-202309-6-1inch.jpg",
    },
    {
        title: "MacBook 15”",
        price: 1299,
        description: "The new 15‑inch MacBook Air makes room for more of a spacious Liquid Retina display.",
        image: "https://i.ibb.co/5Ky5gyp/Mac-Book-Air-15-Inch-Feature-Teal.jpg",
    },
    {
        title: "Pixelbook Pro”",
        price: 1209,
        description: "A high-performance Chromebook designed for professionals and power users.",
        image: "https://i.ibb.co/YQMNjmD/google-pixelbook-pro-4.jpg",
    },
    {
        title: "Sony OLED TV”",
        price: 1400,
        description: "n OLED TV with stunning visuals and immersive sound for a cinematic experience at home.",
        image: "https://i.ibb.co/DMP3xZQ/Sony-Bravia-OLED-TV-1000x563.jpg",
    },
    {
        title: "PlayStation 5”",
        price: 800,
        description: "The latest flagship phone from Google with amazing camera performance.",
        image: "https://i.ibb.co/0VQQdpy/pixel-6-pro-8.jpg",
    },
    {
        title: "Xperia 5 III”",
        price: 890,
        description: "A compact and feature-packed smartphone with professional camera capabilities.",
        image: "https://i.ibb.co/PwW9YJt/sony-xperia-5-iii-11-1000x563.jpg",
    },
    {
        title: "Google Pixel 6”",
        price: 800,
        description: "The latest flagship phone from Google with amazing camera performance.",
        image: "https://i.ibb.co/0VQQdpy/pixel-6-pro-8.jpg",
    },
    {
        title: "Intel Core i9”",
        price: 599,
        description: "A high-performance CPU for gaming and exceptional speed and efficiency.",
        image: "https://i.ibb.co/RbG8tW7/Intel-Core-i9-12900-K.jpg",
    },
];

const TopProducts = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    const onSwiperMouseEnter = () => {
        if (swiperRef) {
            swiperRef.autoplay.stop();
        }
    };

    const onSwiperMouseLeave = () => {
        if (swiperRef) {
            swiperRef.autoplay.start();
        }
    };

    return (
        <div className='shadow-xl border rounded-lg py-6 mb-6' onMouseEnter={onSwiperMouseEnter} onMouseLeave={onSwiperMouseLeave}>
            <SectionTitle heading={"Top Selling Product"} subheading={"Shop Your Desired Product from Featured"} />
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                onSwiper={(swiper) => setSwiperRef(swiper)}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className='flex items-center justify-center'>
                            <div className="card card-compact w-60 bg-base-100 shadow-xl border border-[#a0d3e7]">
                                <figure><img src={product.image} alt="Product" /></figure>
                                <div className="card-body text-center">
                                    <div className='flex justify-between items-center'>
                                        <h2 className="text-lg text-white bg-[#ac52b4] rounded-md px-2 py-1">{product.title}</h2>
                                        <h2 className="text-lg text-white bg-orange-500 rounded-md px-2 py-1">${product.price}</h2>
                                    </div>
                                    <p>{product.description}</p>
                                    <div className="card-actions justify-center">
                                        <button className="bg-[#00AEEF] hover-bg-[#0395ff] text-white px-3 py-2 rounded-md font-medium flex items-center">
                                            Add To Cart <AiOutlineShopping className="ml-1 text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopProducts;
