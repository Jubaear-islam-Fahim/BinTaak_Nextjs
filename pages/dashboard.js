import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import { default as Pending } from '../components/Page_Components/Dashboard/Pending/Pending';
import { default as Active } from '../components/Page_Components/Dashboard/Active/Active';
import Profile from '../components/Page_Components/Dashboard/Profile/Profile';
import Summary from '../components/Page_Components/Dashboard/Summary/Summary';

const dashboard = () => {
    return (
        <div>
            <Head>
                <title>BinTaak dashboard</title>
            </Head>

            <NavBar />


            <div className="dashboard-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Profile />
                        </div>
                        <div className="col-lg-9">
                            <div className="right-side">
                                <Summary />
                                <Pending/>
                                <Active/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default dashboard;