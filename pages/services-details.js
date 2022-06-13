import React, { useState } from 'react'; 
import NavBar from '../components/Global/NavBar';
import Footer from '../components/Global/Footer';
import Services_Details from '../components/Page_Components/Services/ServicesDetails';

const ServicesDetails = () => {
    return (
        <div className="signup_wrapper">
            <NavBar/>
            <Services_Details/>
            <Footer/>
        </div>
    );
}

export default ServicesDetails;