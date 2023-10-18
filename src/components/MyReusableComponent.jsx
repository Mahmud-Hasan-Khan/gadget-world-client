const MyReusableComponent = ({ title, subtitle }) => {

    const titleStyle = {
        color: '#331A15', // Text color
        fontSize: '55px', // Font size
        fontFamily: 'Rancho', // Font family
        textShadow: '4px 4px 6px rgba(0, 0, 0, 0.6)' // Text shadow
    };

    return (
        <div className="flex items-center justify-center mt-10">
            <div>
                <p className="text-[#1B1A1A] text-xl text-center">{subtitle}</p>
                <h3 style={titleStyle}>{title}</h3>
            </div>
        </div>
    );
};

export default MyReusableComponent;