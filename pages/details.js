import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import Slider from '../components/Page_Components/Details/Slider/Slider';
import Title from '../components/Page_Components/Details/Title/Title';

const details = () => {
    return (
        <div>
            <Head>
                <title>BinTaak Service details</title>
            </Head>

            <NavBar />


            <div className="service-details-area pt-100 pb-100">
                <div className="container">
                    <Title />
                    <div className="row">
                        <div className="col-lg-6">
                            <Slider />
                        </div>
                        <div className="col-lg-6">
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default details;