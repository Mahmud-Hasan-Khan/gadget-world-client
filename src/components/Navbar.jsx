/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../Provider/AuthProviders';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { loggedInUser, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/")
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const navLinks = <div className='font-bold text-[#00AEEF]'>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/addProduct" className={({ isActive }) => (isActive ? 'border-b-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : '')}>Add Product</NavLink>
        </li>
        <li>
            <NavLink to="/myCart" className={({ isActive }) => (isActive ? 'border-b-2 border-[#00AEEF] text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : '')}>My Cart</NavLink>
        </li>
    </div>


    return (
        <div className="navbar shadow-xl fixed z-10 bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-32">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/"><img className='w-16 lg:w-24' src="https://i.ibb.co/VYszNbw/logo.png" alt="logo" /> </Link>
            </div>
            <div className="navbar-center hidden lg:block">
                <ul className="menu menu-horizontal space-x-2 font-bold text-[#00AEEF]">
                    <li>
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 rounded-full shadow-md border-[#00AEEF] text-base text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : 'text-base')}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addProduct" className={({ isActive }) => (isActive ? 'border-b-2 border-[#00AEEF] text-base text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : 'text-base')}>Add Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/myCart" className={({ isActive }) => (isActive ? 'border-b-2 border-[#00AEEF] text-base text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white' : 'text-base')}>My Cart</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end space-x-1 lg:space-x-2 mr-3 lg:mr-0">
                {
                    loggedInUser ?
                        <>
                            <p className='text-sm lg:text-base'>{loggedInUser?.displayName}</p>
                            <img
                                className='rounded-full'
                                src={loggedInUser?.photoURL}
                                alt='profile'
                                height='34'
                                width='34'
                            />
                            <Link onClick={handleLogout} className='bg-[#00AEEF] hover:bg-[#0395ff] px-3 py-1.5 rounded-full text-white font-medium hover:shadow-md' to="/login">Logout</Link>
                        </>
                        :
                        <>
                            <Link className='bg-[#00AEEF] hover:bg-[#0395ff] px-3 py-1.5 rounded-full text-white font-medium hover:shadow-md' to="/login">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;