import React, { useState } from 'react'; 
import NavBar from '../components/Global/NavBar';
import Footer from '../components/Global/Footer';
import All_Services from '../components/Page_Components/Services/AllServices';

const AllServices = () => {
    return (
        <div className="single_wrapper">
            <NavBar/>
            <All_Services/>
            <Footer/>
        </div>
    );
}

export default AllServices;