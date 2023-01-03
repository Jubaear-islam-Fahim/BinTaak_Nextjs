import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import Profile from '../components/Page_Components/Settings/Profile/Profile';
import ProfileRight from '../components/Page_Components/Settings/ProfileRight/ProfileRight';

const settings = () => {
    return (
        <div>
            <Head>
                <title>BinTaak settings</title>
            </Head>

            <NavBar />


            <div className="settings-area-home pt-100 pb-100">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3">
                            <Profile />
                        </div>
                        <div className="col-lg-9">
                            <ProfileRight />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default settings;