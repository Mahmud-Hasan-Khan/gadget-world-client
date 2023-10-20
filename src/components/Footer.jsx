import { useState, useEffect } from 'react';
import moment from 'moment';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// import logoImg from '../../../assets/logo/logo.png';
import { ImFacebook2, ImYoutube2 } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        const year = moment().format('YYYY');
        setCurrentYear(year);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    AOS.init({
        duration: 3000,
    })

    return (
        <motion.footer
            className="bg-gray-500 p-4 rounded-lg my-4"
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={footerVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="footer text-white lg:grid grid-clo-4 place-items-center justify-evenly">
                <div data-aos="fade-right">
                    <img className="cover" src="https://i.ibb.co/VYszNbw/logo.png" alt="" />
                    <p>
                        Gadget World Ltd.
                        <br />
                        No.1 Electronic Gadget Online Shop
                    </p>
                </div>
                <div data-aos="fade-right">
                    <span className="footer-title text-white">Address</span>
                    <p>
                        Level-4, 34, Awal Centre
                        <br />
                        Banani, Dhaka, Bangladesh
                    </p>
                </div>
                <div data-aos="fade-left">
                    <span className="footer-title text-white">Contact Information</span>
                    <p>Email: info@gadgetworld.com</p>
                    <p>Web: www.gadgetworld.com</p>
                    <p className="text-center">
                        Phone: +880 1913 509 561 , <br /> +880 1521 353 320
                    </p>
                </div>
                <div data-aos="fade-left">
                    <span className="footer-title text-white">Social</span>
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <ImFacebook2 />
                        <ImYoutube2 />
                        <AiFillInstagram />
                        <FcGoogle />
                    </div>
                </div>
            </div>
            <p className="text-center pt-4">
                Copyright © <span>{currentYear} </span> - All right reserved by Gadget World Ltd
            </p>
        </motion.footer>
    );
};

export default Footer;
