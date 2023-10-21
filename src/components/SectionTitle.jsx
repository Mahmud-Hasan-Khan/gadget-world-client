import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subheading }) => {
    return (
        <div className='mx-auto sm:w-4/6 md:w-3/4 lg:w-4/12 text-center px-6 lg:px-0 py-4'>
            <h3 className='text-3xl lg:text-4xl font-bold border-y-2 lg:border-y-4 text-[#00AEEF] border-[#00AEEF] py-2'>{heading}</h3>
            <h4 className="text-[#ac52b4] py-2 font-normal lg:font-medium">----- {subheading} -----</h4>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired
}

export default SectionTitle;