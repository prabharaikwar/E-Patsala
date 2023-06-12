import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer className="bg-dark p-5">
            <div className="text-white text-center mt-5">
                <h1 className="fw-bold">E-Patsala</h1>
                <p>6/1 Shah Road, Narayanganj,<br />Bangladesh</p>
                <p>Privacy Ploicy | Terms of use</p>
            </div>
            <div className="text-center display-6 mb-5">
                <Link to="https://www.facebook.com" target="_blank"><FaFacebookSquare className='text-white px-2' /></Link>
                <Link to="https://twitter.com" target="_blank"><BsTwitter className=" text-white px-2 " /> </Link>
                <Link to="https://www.instagram.com" target="_blank"><BsInstagram className='text-white px-2' /></Link>
                <Link to="https://www.linkedin.com" target="_blank"><BsLinkedin className='text-white px-2 ' /></Link>

            </div>

        </footer>
    )
}

export default Footer