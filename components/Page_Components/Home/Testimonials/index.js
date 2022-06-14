import Image from "next/image";
import Slider from 'react-slick';

import t1 from "/public/assets/img/t1.png";

import { BsStarFill } from "react-icons/bs";

const Testimonials = () => {
    const TestimonialsSlid = { 
        dots: true,
        slickNext: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    }

    return (
        <div className="testimonials_area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content">
                            <div className="h2 title">Meet Our Top Experts</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-12">

                        <div className="testimonials_content">
                            <Slider {...TestimonialsSlid}>
                                <div className="testimonials_item">
                                    <div className="tim_mm">
                                        <div className="testimonials_img">
                                            <Image src={t1} alt="team" />
                                        </div>
                                        <div className="testimonials_text">
                                            <ul>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                            </ul>
                                            <p>Slate helps you see how
                                                many more days you need
                                                to work to reach your financial
                                                goal for the month and year.</p>
                                            <div className="h6 name">Regina Miles</div>
                                            <div className="h6 des">Designer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials_item">
                                    <div className="tim_mm">
                                        <div className="testimonials_img">
                                            <Image src={t1} alt="team" />
                                        </div>
                                        <div className="testimonials_text">
                                            <ul>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                            </ul>
                                            <p>Slate helps you see how
                                                many more days you need
                                                to work to reach your financial
                                                goal for the month and year.</p>
                                            <div className="h6 name">Regina Miles</div>
                                            <div className="h6 des">Designer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials_item">
                                    <div className="tim_mm">
                                        <div className="testimonials_img">
                                            <Image src={t1} alt="team" />
                                        </div>
                                        <div className="testimonials_text">
                                            <ul>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                            </ul>
                                            <p>Slate helps you see how
                                                many more days you need
                                                to work to reach your financial
                                                goal for the month and year.</p>
                                            <div className="h6 name">Regina Miles</div>
                                            <div className="h6 des">Designer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials_item">
                                    <div className="tim_mm">
                                        <div className="testimonials_img">
                                            <Image src={t1} alt="team" />
                                        </div>
                                        <div className="testimonials_text">
                                            <ul>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                            </ul>
                                            <p>Slate helps you see how
                                                many more days you need
                                                to work to reach your financial
                                                goal for the month and year.</p>
                                            <div className="h6 name">Regina Miles</div>
                                            <div className="h6 des">Designer</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonials_item">
                                    <div className="tim_mm">
                                        <div className="testimonials_img">
                                            <Image src={t1} alt="team" />
                                        </div>
                                        <div className="testimonials_text">
                                            <ul>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                                <li><BsStarFill /></li>
                                            </ul>
                                            <p>Slate helps you see how
                                                many more days you need
                                                to work to reach your financial
                                                goal for the month and year.</p>
                                            <div className="h6 name">Regina Miles</div>
                                            <div className="h6 des">Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </Slider>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;