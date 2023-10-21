import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

import { ImSpinner3 } from "react-icons/im";
import auth from "../../firebase/firebase.config";
import { Helmet } from "react-helmet";

const Register = () => {

    const { createUser, loading } = useContext(UserContext);
    const [errorReg, setErrorReg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (errorReg) {
            Swal.fire({
                icon: 'error',
                text: errorReg
            });
        }
    }, [errorReg]);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const photoUrl = form.get('photoUrl');
        const name = form.get('name');
        console.log(email, password, name, photoUrl);

        // password validation using regex
        if (!/^.{6,}$/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have 6 characters or more',
            });
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have a capital letter',
            });
            return;
        }
        else if (!/[!@#$%^&*()_+]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Error',
                text: 'Password must have a special character',
            });
            return;
        }

        //Register user with email and password
        createUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);

                // update user profile
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photoUrl
                })
                    .then(() => { })
                    .catch(error => {
                        console.log(error.message);
                    })

                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration Successful! Login You Account Now!',
                    showConfirmButton: false,
                    timer: 1500
                })

                navigate('/login')
            })

            .catch((error) => {
                const errorMessage = error.message;
                setErrorReg(errorMessage);
            })
    }

    return (

        <div style={{
            backgroundImage: `url(https://i.ibb.co/pJwm3Q7/gadgetBg.png)`,
            // backgroundSize: 'cover',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
        }}

        >
            <Helmet>
                <title>Gadget World :: Register</title>
            </Helmet>

            <div className="hero my-2 lg:mt-10" data-aos="fade-up">
                <div className="px-24 py-4 max-w-[752px] shadow-2xl bg-transparent backdrop-blur-sm rounded-lg">
                    <h1 className="text-4xl font-semibold text-center text-white">Register your account</h1>
                    <div className="divider pt-1"></div>

                    <form onSubmit={handleRegister} className="space-y-2">
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Photo URL</span>
                            </label>
                            <input type="url" name="photoUrl" placeholder="Enter your Photo URL" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Email address</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered bg-[#F3F3F3] " required />
                        </div>
                        <div className="form-control max-w-[558px]">
                            <label className="label">
                                <span className="text-xl font-semibold text-white">Password</span>
                            </label>
                            <div className="relative  rounded-md flex justify-items-start items-center bg-[#F3F3F3]">
                                <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter your password" className="w-full input input-bordered bg-[#F3F3F3]" required />
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            <label className="label">
                                <span className="text-left"><input type="checkbox" name="" id="" required /> <Link to='/'>Accept Term & Conditions</Link> </span>
                            </label>
                        </div>
                        <div className="form-control mt-6 max-w-[558px]">
                            <button className="bg-[#ad5cb4] font-medium text-white py-3 rounded-lg hover:bg-[#ac49b5] hover:shadow-lg">
                                {loading ? (
                                    <ImSpinner3 className='m-auto animate-spin' size={24} />
                                ) : (
                                    'Register'
                                )}
                            </button>
                        </div>
                        <p className="font-semibold text-center">Already have an account ? <Link to="/login" className="text-white">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;