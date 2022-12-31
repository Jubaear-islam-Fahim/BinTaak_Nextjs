import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import Contact from '../components/Page_Components/Contact/Contact';

const contact = () => {
    return (
        <div>
            <Head>
                <title>BinTaak Contact</title>
            </Head>

            <NavBar />

            <Contact />

            <Footer />
        </div>
    );
};

export default contact;