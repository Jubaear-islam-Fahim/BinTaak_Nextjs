import Image from "next/image";
import Slider from 'react-slick';

import c1 from "../public/assets/img/cl1.png";
import c2 from "../public/assets/img/cl2.png";
import c3 from "../public/assets/img/cl3.png";
import c4 from "../public/assets/img/cl4.png";
import c5 from "../public/assets/img/cl100.png";

const ClientLogo = () => {
    const clientLogo = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

    }
    return (
        <div className="client_logo_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...clientLogo}>
                            <div className="client_logo_item">
                                <Image src={c1} alt="Work Logo" />
                            </div>
                            <div className="client_logo_item">
                                <Image src={c2} alt="Work Logo" />
                            </div>
                            <div className="client_logo_item">
                                <Image src={c3} alt="Work Logo" />
                            </div>
                            <div className="client_logo_item">
                                <Image src={c4} alt="Work Logo" />
                            </div>
                            <div className="client_logo_item">
                                <Image src={c2} alt="Work Logo" />
                            </div>
                            <div className="client_logo_item">
                                <Image src={c5} alt="Work Logo" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientLogo;