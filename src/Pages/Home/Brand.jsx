import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ branData }) => {
    const { image, brand } = branData;
    // console.log(branData);
    return (
        <Link to={`/products/${branData.brand}`}>
            <div className="card w-96 h-72 bg-base-100 shadow-xl border border-[#a0d3e7]">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-center text-5xl font-medium">{brand}</h2>
                </div>
            </div>
        </Link>
    );
};
Brand.propTypes = {
    branData: PropTypes.object.isRequired
}
export default Brand;
