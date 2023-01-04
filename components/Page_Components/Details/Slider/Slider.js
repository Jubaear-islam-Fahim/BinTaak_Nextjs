import React, { useState } from 'react';
import Sliders from "react-slick";

const Slider = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div>
            <Sliders 
                className='details_slider_one'  
                asNavFor={nav2} 
                ref={(slider1) => setNav1(slider1)}
            >
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div>  
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div>  
            </Sliders> 
            <Sliders
                className='details_slider_tow'
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={4}
                slidesToScroll={4}
                swipeToSlide={true}
                focusOnSelect={true}
                infinite={false}

            >
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                <div>
                    <img src="/assets/img/details1.png" className="img-fluid" alt="..."/>
                </div> 
                 
            </Sliders>
        </div>
    );
};

export default Slider;