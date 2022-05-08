import Image from "next/image";
import Slider from 'react-slick';

import t1 from "../public/assets/img/t1.png";

const Testimonials = () => {
    const TestimonialsSlid = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

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
                                    <div className="testimonials_img">
                                        <Image src={t1} alt="team" /> 
                                    </div>
                                    <div className="testimonials_text">
                                        <ul>
                                            <li></li>
                                        </ul>
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