import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ImSpinner3 } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc'
import { UserContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";
import { Typewriter } from 'react-simple-typewriter'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from 'react-helmet';

const Login = () => {

    const { signInWithGoogle, loginWithEmailPassword, loading } = useContext(UserContext);

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (loginError) {
            Swal.fire({
                icon: 'error',
                text: loginError
            });
        }
    }, [loginError]);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginWithEmailPassword(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                // form reset 
                form.email.value = '';
                form.password.value = '';
                navigate(location?.state ? location.state : "/")
                // navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(error);
                setLoginError(errorMessage)
            })
    }

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(location?.state ? location.state : "/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(error);
                setLoginError(errorMessage)
            })

    }

    // AOS setting
    AOS.init({
        duration: 3000,
    })
    return (

        <div className='py-4 bg-[#00AEEF]'>
            <Helmet>
                <title>Gadget World :: Login</title>
            </Helmet>

            <div className='flex justify-center items-center' >
                <div className='flex flex-col rounded-md sm:p-10 shadow-2xl bg-base-100 text-gray-900 px-4' data-aos="fade-left">
                    <h1 className='my-4 text-4xl font-bold text-[#00AEEF]' style={{ textShadow: '3px 3px 5px rgba(0, 0, 0, 0.4)' }}>
                        <Typewriter
                            cursor={false}
                            // cursorBlinking={0}
                            delaySpeed={1500}
                            deleteSpeed={55}
                            loop={1}
                            typeSpeed={100}
                            words={[
                                'Welcome To Login',
                            ]}
                        />
                    </h1>
                    <form
                        onSubmit={handleLogin}
                        noValidate=''
                        action=''
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    name="email"
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Address'
                                    className='w-full px-3 py-3 border rounded-md border-gray-300 focus:outline-[#00AEEF] bg-base-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='password' className='block text-sm mb-2 '>
                                    Password
                                </label>
                                <div className="relative input border rounded-md border-gray-300  focus:outline-[#00AEEF] flex justify-items-start bg-base-200   items-center">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='*******'
                                        name="password"
                                        id='password'
                                        required
                                        className='w-full px-0 py-2 focus:outline-[#fff] bg-base-200'
                                    />
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
                            </div>
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-[#00AEEF] w-full rounded-md py-3 text-white'
                            >
                                {loading ? (
                                    <ImSpinner3 className='m-auto animate-spin' size={24} />
                                ) : (
                                    'Continue'
                                )}
                            </button>
                        </div>
                        <div className="divider">OR</div>
                        <div onClick={handleGoogleLogin}
                            className='flex justify-center items-center space-x-2 border p-2 border-gray-300 border-rounded rounded-md cursor-pointer bg-[#4081ec] text-white'
                        >
                            <FcGoogle className='bg-white rounded-full' size={32} />
                            <p className='text-center'>Continue with Google</p>
                        </div>
                    </form>
                    <p className='px-6 mt-2 text-sm font-medium text-center text-gray-400'>
                        Do not have an account yet?
                        <Link
                            to='/register'
                            className='text-[#00aeef] hover:underline font-semibold ml-1'
                        >
                            Register Now
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;