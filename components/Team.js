import Image from "next/image";
import Slider from 'react-slick';

import team from "../public/assets/img/team.png";

const Team = () => {
    const teamSlid = {
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
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
                                </div>
                                <div className="team_item">
                                    <Image src={team} alt="team" />
                                    <div className="h4 name">Megan Taylor</div>
                                    <div className="h6 description">Graphics Designer</div>
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