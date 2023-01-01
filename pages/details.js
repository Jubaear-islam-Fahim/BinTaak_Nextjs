import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import About from '../components/Page_Components/Details/About/About';
import Faq from '../components/Page_Components/Details/Faq/Faq';
import Plan from '../components/Page_Components/Details/Plan/Plan';
import Seller from '../components/Page_Components/Details/Seller/Seller';
import Service from '../components/Page_Components/Details/Service/Service';
import Slider from '../components/Page_Components/Details/Slider/Slider';
import Title from '../components/Page_Components/Details/Title/Title';
import Review from '../components/Page_Components/Profile/Review/Review';

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
                            <About />
                        </div>
                        <div className="col-lg-6">
                            <Plan />
                            <Seller />

                        </div>
                    </div>
                    <Faq />
                    <Review />
                    <Service />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default details;