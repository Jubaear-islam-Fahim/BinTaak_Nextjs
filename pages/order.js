import Head from 'next/head';
import React from 'react';
import Footer from '../components/Global/Footer';
import NavBar from '../components/Global/NavBar';
import Delivery from '../components/Page_Components/Order/Delivery/Delivery';
import OrderAction from '../components/Page_Components/Order/OrderDetails/OrderAction';
import OrderDetails from '../components/Page_Components/Order/OrderDetails/OrderDetails';
import OrderTable from '../components/Page_Components/Order/OrderTable/OrderTable';

const order = () => {
    return (
        <div>
            <Head>
                <title>BinTaak  Order</title>
            </Head>

            <NavBar />


            <div className="order-area-home pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                           <OrderTable/>
                        </div>
                        <div className="col-lg-3">
                          <Delivery/>
                          <OrderDetails/>
                          <OrderAction/>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default order;