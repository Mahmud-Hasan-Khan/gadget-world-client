
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  {
    title: "HeadPhone",
    image: "https://www.gadgetmonkeybd.com/public/uploads/all/VRjhxiVdeu5HfoF6LB6cH9HW0SzjtVTiFcD2oNKr.jpg",
  },
  {
    title: "Power Bank",
    image: "https://www.gadgetmonkeybd.com/public/uploads/all/liLaIl4CHp6RkV3vNses3hgZHiZOkx6gs4mgKnPd.webp",
  },
  {
    title: "MI-2300",
    image: "https://www.gadgetmonkeybd.com/public/uploads/all/t6M5mdnUQH0ZAb1cWx0GL1jxIScw76IPovzG9XgG.webp",
  },
  {
    title: "UBL Extra Bass",
    image: "https://www.gadgetmonkeybd.com/public/uploads/all/RrTcdTir26lvCKduGYzHyGO69VE2BI2I7AGNSS6X.jpg",
  },
  {
    title: "Apple Watch",
    image: "https://www.gadgetmonkeybd.com/public/uploads/all/GAgoYzhOinwyFBtuzUHeMOj7ypHbqpj4SlqXqhSP.webp",
  },
  // Add more products as needed
];

const TopSellingProducts = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="autoplay bg-white rounded">
      <h1 className="text-center text-5xl font-bold pt-6 text-[#00AEEF] ">Top Selling Product</h1>
      <h5 className="text-center text-lg text-[#ac52b4] font-medium pt-4 pb-6">Shop Your Desired Product from Featured </h5>
      <Slider {...settings} className="sm:slides-1 md:slides-2 lg:slides-3">
        {products.map((product, index) => (
          <div key={index} className='p-4'>
            <div className="bg-base-200 rounded-lg shadow-lg overflow-hidden flex items-center">
              <img src={product.image} alt={product.title} className="w-[200px] h-40" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopSellingProducts;