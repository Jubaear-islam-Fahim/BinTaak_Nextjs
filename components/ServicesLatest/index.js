import Image from "next/image";

import serv from "../../public/assets/img/s1.jpg";
import useI from "../../public/assets/img/user.png";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";

const ServicesLatest = () => {
    return (
        <div className="services_area pt-100 pb-100 bg_gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content about_sec">
                            <div className="h2 title">Latest Uploaded Services</div>
                            <div className="filterS">
                                <BsFilter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row services_row pt-5">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="services_item">
                            <div className="services_img">
                                <Image src={serv} alt="Services Images" />
                                <div className="heart">
                                    <span className="active"><FaRegHeart /></span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                            <div className="services_user">
                                <div className="use_img">
                                    <Image src={useI} alt="Services Images" />
                                    <span>bintaak</span>
                                </div>
                                <div className="use_button">
                                    <a className="use_btn">Website Design</a>
                                </div>
                            </div>
                            <div className="services_description">
                                <p>Website Link Building And Generating Traffic</p>
                            </div>
                            <div className="services_footer">
                                <ul>
                                    <li className="name_pri">Starting From <span>$ 400.00</span></li>
                                    <li className="star"><i className="fa-solid fa-star"></i> 4.8 <span>(418)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="services_item">
                            <div className="services_img">
                                <Image src={serv} alt="Services Images" />
                                <div className="heart">
                                    <span className="active"><FaRegHeart /></span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                            <div className="services_user">
                                <div className="use_img">
                                    <Image src={useI} alt="Services Images" />
                                    <span>bintaak</span>
                                </div>
                                <div className="use_button">
                                    <a className="use_btn">Website Design</a>
                                </div>
                            </div>
                            <div className="services_description">
                                <p>Website Link Building And Generating Traffic</p>
                            </div>
                            <div className="services_footer">
                                <ul>
                                    <li className="name_pri">Starting From <span>$ 400.00</span></li>
                                    <li className="star"><i className="fa-solid fa-star"></i> 4.8 <span>(418)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="services_item">
                            <div className="services_img">
                                <Image src={serv} alt="Services Images" />
                                <div className="heart">
                                    <span className="active"><FaRegHeart /></span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                            <div className="services_user">
                                <div className="use_img">
                                    <Image src={useI} alt="Services Images" />
                                    <span>bintaak</span>
                                </div>
                                <div className="use_button">
                                    <a className="use_btn">Website Design</a>
                                </div>
                            </div>
                            <div className="services_description">
                                <p>Website Link Building And Generating Traffic</p>
                            </div>
                            <div className="services_footer">
                                <ul>
                                    <li className="name_pri">Starting From <span>$ 400.00</span></li>
                                    <li className="star"><i className="fa-solid fa-star"></i> 4.8 <span>(418)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="services_item">
                            <div className="services_img">
                                <Image src={serv} alt="Services Images" />
                                <div className="heart">
                                    <span className="active"><FaRegHeart /></span>
                                    <span><FaHeart /></span>
                                </div>
                            </div>
                            <div className="services_user">
                                <div className="use_img">
                                    <Image src={useI} alt="Services Images" />
                                    <span>bintaak</span>
                                </div>
                                <div className="use_button">
                                    <a className="use_btn">Website Design</a>
                                </div>
                            </div>
                            <div className="services_description">
                                <p>Website Link Building And Generating Traffic</p>
                            </div>
                            <div className="services_footer">
                                <ul>
                                    <li className="name_pri">Starting From <span>$ 400.00</span></li>
                                    <li className="star"><i className="fa-solid fa-star"></i> 4.8 <span>(418)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ServicesLatest; 