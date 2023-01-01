import Image from 'next/image';
import React, { useState } from 'react';
import data from '../../../../data/data.json';
const Review = () => {
    const [review, setReview] = useState(data.reviews)
    return (
        <>
            <div className="review-area">
                <h2 className='title'>Reviews(10298)</h2>

                {
                    review.map(review =>
                        <>
                            <div className="single-review">
                                <div className="row">
                                    <div className="col-lg-1">
                                        <div className="img">
                                            <Image src={review.userImg} widthalt="" title="" width="100%" height="100%" layout="responsive" objectFit="cover" />
                                        </div>
                                    </div>
                                    <div className="col-lg-11">
                                        <div className="row align-items-center">
                                            <div className="col-lg-7">
                                                <div className="top-content d-flex align-items-center">

                                                    <div className="content">
                                                        <h6>{review.user}</h6>
                                                        <p><i className="ri-map-pin-line"></i>{review.location}</p>
                                                        <span>{review.date}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <ul className="rate d-flex align-items-center">
                                                    <li><i className="ri-star-fill"></i></li>
                                                    <li><i className="ri-star-fill"></i></li>
                                                    <li><i className="ri-star-fill"></i></li>
                                                    <li><i className="ri-star-fill"></i></li>
                                                    <li><i className="ri-star-fill"></i></li>
                                                    <li>{review.rate}</li>
                                                </ul>
                                            </div>
                                            <p className='desc'>
                                                {review.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>)
                }
            </div>

        </>
    );
};

export default Review;