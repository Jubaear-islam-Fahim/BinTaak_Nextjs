
import Image from "next/image"; 
import play_button from "../public/assets/img/play-button-o.png";

const WorkPlanes = () => {
    return (
        <div className="work_plane_area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="work_plane_content">
                            <div className="work_plane_text">
                                <div className="section-content">
                                    <div className="h2 title">Choose Your Platform</div>
                                    <p className="pt-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                                    </p>
                                </div>
                                <div className="work_plane_list">
                                    <div className="work_plane_item">
                                        <div className="number">01</div>
                                        <div className="h4">Lorem ipsum dolro sit</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                    <div className="work_plane_item">
                                        <div className="number">02</div>
                                        <div className="h4">Lorem ipsum dolro sit</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                    <div className="work_plane_item">
                                        <div className="number">03</div>
                                        <div className="h4">Lorem ipsum dolro sit</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                    <div className="work_plane_item">
                                        <div className="number">04</div>
                                        <div className="h4">Lorem ipsum dolro sit</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                    <div className="work_plane_item">
                                        <div className="number">05</div>
                                        <div className="h4">Lorem ipsum dolro sit</div>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                        </p>
                                    </div>
                                    <div className="work_plane_item">
                                        <div className="get_btn">
                                            <a>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="work_plane_img">
                                <a href="#" className="play_i"><Image src={play_button} alt="categories images" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkPlanes;