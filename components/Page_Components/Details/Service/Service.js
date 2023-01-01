import Image from 'next/image';
import React, { useState } from 'react';
import data from '../../../../data/data.json';
const Service = () => {
    const [service, setService] = useState(data.recommend)
    return (
        <>
            <div className="services">
                <h2 className='title'>Recommended For You</h2>
                <div className="row">
                    {
                        service.map(service =>
                            <>
                                <div className="col-lg-3 col-md-6">
                                    <div className="single-service">
                                        <div className="img">
                                            <div className="icon">
                                                <i className="ri-heart-line"></i>
                                            </div>
                                            <Image src={service.url} widthalt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                        </div>
                                        <div className="content">
                                            <div className="row align-items-center">
                                                <div className="col-6">
                                                    <ul className='d-flex align-items-center user-top'>
                                                        <img className='user-img' src={service.userImg} />
                                                        <li><span>{service.user}</span></li>
                                                    </ul>
                                                </div>
                                                <div className="col-6">
                                                    <span className='category'>{service.category}</span>
                                                </div>
                                            </div>
                                            <h3>{service.title}</h3>
                                            <hr />
                                            <div className="content-bottom">
                                                <div className="row align-items-center">
                                                    <div className="col-8">
                                                        <h5>Starting From <span>${service.price}</span></h5>
                                                    </div>
                                                    <div className="col-4 ps-0">
                                                        <ul className='d-flex align-items-center'>
                                                            <li><i className="ri-star-fill"></i> <span className='rate'>{service.rate}</span> <span className='comment'>({service.comment})</span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>)
                    }
                </div>
            </div>
        </>
    );
};

export default Service;