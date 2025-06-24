import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import toast from 'react-hot-toast';

const NavBar = () => {
    const { token, navigate, setToken } = useContext(AppContext);
    const [isUserSignedIn, setIsUserSignedIn] = useState(!!token);

    useEffect(() => {
        setIsUserSignedIn(!!token);
    }, [token]);

    const handleAuthClick = () => {
        if (isUserSignedIn) {
            // Logout
            setToken('');
            localStorage.removeItem('token'); // if using localStorage
            toast.success('Successfully Logged Out');
            navigate('/');
        } else {
            // Login
            navigate('/login');
        }
    };

    return (
        <div className="flex items-center justify-between py-3 mx-4 lg:mx-44">
            <Link to="/" className="flex items-center gap-4 max-sm:gap-2">
                <img src={assets.logo} className="w-20 h-20 max-sm:w-10 max-sm:h-10" alt="Logo" />
                <h1 className="text-3xl max-sm:text-lg text-[#23488a] font-semibold">QuckiBlogg</h1>
            </Link>
            <button onClick={handleAuthClick} className="cursor-pointer bg-[#23488a] text-white px-3 py-2 w-40 max-sm:w-auto rounded-3xl flex justify-center gap-2 hover:scale-105 transition-all duration-500" >
                {isUserSignedIn ? 'Logout' : 'Login'} <img src={assets.arrow} alt="arrow" />
            </button>
        </div>
    );
};

export default NavBar;
