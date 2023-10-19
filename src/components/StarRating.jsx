import Rating from 'react-rating-stars-component';
import PropTypes from 'prop-types';
const StarRating = ({ rating, size = 24 }) => {
    return (
        <Rating
            count={5} // Number of stars
            size={size} // Size of the stars
            value={rating} // The current rating
            edit={false} // Disable editing (read-only)
            activeColor="#f8b400" // Active star color
            color="#d8d8d8" // Inactive star color
        />
    );
};
StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
}

export default StarRating;