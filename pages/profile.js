import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import Descripton from '../components/Page_Components/Profile/Descripton/Descripton';
import Education from '../components/Page_Components/Profile/Education/Education';
import Language from '../components/Page_Components/Profile/Language/Language';
import Profile from '../components/Page_Components/Profile/Profile/Profile';
import Review from '../components/Page_Components/Profile/Review/Review';
import Service from '../components/Page_Components/Profile/Service/Service';
import Skill from '../components/Page_Components/Profile/Skill/Skill';

const profile = () => {
    return (
        <div>
            <Head>
                <title>BinTaak Public profile</title>
            </Head>

            <NavBar />


            <div className="profile-area-home pt-100 pb-100">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3">
                            <Profile />
                            <Descripton />
                            <Language />
                            <Skill />
                            <Education />

                        </div>
                        <div className="col-lg-9">
                            <Service />
                            <Review/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default profile;