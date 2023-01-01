import React from 'react';
import useI from "/public/assets/img/user.png";
import Image from 'next/image';
const Title = () => {
    return (
        <>
            <div className="title-area">
                <div className="row">
                    <div className="col-lg-11">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Development</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Website Development</li>
                            </ol>
                        </nav>
                        <h3>Website Link Building And Generating Traffic</h3>

                        <ul className='d-flex align-items-center'>
                            <li>  <Image src={useI} alt="Services Images" /></li>
                            <li className='ms-2'><span>bintaak</span></li>
                            <ul className='rate ms-2 d-flex align-items-center'>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li><i className="ri-star-fill"></i></li>
                                <li className='ratenumber'>5.0</li>
                                <li className='number'>(418)</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="col-lg-1">
                        <a href="#" className="border-btn"><i className="ri-heart-3-line"></i>Save</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Title;