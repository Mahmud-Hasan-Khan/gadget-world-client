import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousArrow = (props) => (
    <button {...props} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-white px-4 py-2 rounded-full">
        <p>❮</p>
    </button>
);

const NextArrow = (props) => (
    <button {...props} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-transparent text-white px-4 py-2 rounded-full">
        <p>❯</p>
    </button>
);

const ImageSlider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000, slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PreviousArrow />,
        nextArrow: <NextArrow />,
    };

    const slides = [
        {
            image: 'https://i.ibb.co/zVc9rMg/Apple.jpg',
        },
        {
            image: 'https://i.ibb.co/74M7n4r/shopNow.jpg',
        },
        {
            image: 'https://i.ibb.co/6nnHKz5/iphone.jpg',
        },
        {
            image: 'https://i.ibb.co/mXzk389/sam.jpg',
        },
    ];

    return (
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative">
                    <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-[200px] lg:h-[448px]" />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;