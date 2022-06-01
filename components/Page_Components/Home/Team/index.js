import Image from "next/image";
import Slider from 'react-slick';

import team from "/public/assets/img/team.png";

const Team = () => {
    const teamSlid = {
        dots: true,
        slickNext: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
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
        <div className="team_area pt-100 pb-100 bg_gray">
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
                        <div className="team_content">
                            <Slider {...teamSlid}>
                                <div className="team_mm">
                                    <div className="team_item">
                                        <Image src={team} alt="team" />
                                        <div className="h4 name">Megan Taylor</div>
                                        <div className="h6 description">Graphics Designer</div>
                                    </div>
                                </div>
                                <div className="team_mm">
                                    <div className="team_item">
                                        <Image src={team} alt="team" />
                                        <div className="h4 name">Megan Taylor</div>
                                        <div className="h6 description">Graphics Designer</div>
                                    </div>
                                </div>
                                <div className="team_mm">
                                    <div className="team_item">
                                        <Image src={team} alt="team" />
                                        <div className="h4 name">Megan Taylor</div>
                                        <div className="h6 description">Graphics Designer</div>
                                    </div>
                                </div>
                                <div className="team_mm">
                                    <div className="team_item">
                                        <Image src={team} alt="team" />
                                        <div className="h4 name">Megan Taylor</div>
                                        <div className="h6 description">Graphics Designer</div>
                                    </div>
                                </div>
                                <div className="team_mm">
                                    <div className="team_item">
                                        <Image src={team} alt="team" />
                                        <div className="h4 name">Megan Taylor</div>
                                        <div className="h6 description">Graphics Designer</div>
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

export default Team;