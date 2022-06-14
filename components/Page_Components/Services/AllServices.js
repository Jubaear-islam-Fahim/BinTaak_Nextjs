import Image from "next/image";

import serv from "/public/assets/img/s1.jpg";
import useI from "/public/assets/img/user.png";
import solution1 from "/public/assets/img/solution1.png";
import solution2 from "/public/assets/img/solution2.png";
import solution3 from "/public/assets/img/solution3.png";
import solution4 from "/public/assets/img/solution4.png";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFilter } from "react-icons/bs";
import Categories from "../Home/Solution";
import { FaSearch } from "react-icons/fa";
const all_services = () => {
    return (
        <div className="mt-5 pt-100 pb-100">
            <div className="categories-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form className="input-form">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button type="submit"><FaSearch /></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Solution_area pt-5">
                <div className="container"> 
                    <div className="row ">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution1} alt="Solution images" />
                                <div className="h5">Graphics Design</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution2} alt="Solution images" />
                                <div className="h5">Digital Marketing</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution3} alt="Solution images" />
                                <div className="h5">Writing & Translation</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution4} alt="Solution images" />
                                <div className="h5">Video & Animation</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution1} alt="Solution images" />
                                <div className="h5">Graphics Design</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution2} alt="Solution images" />
                                <div className="h5">Digital Marketing</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution3} alt="Solution images" />
                                <div className="h5">Writing & Translation</div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="solution_item">
                                <Image src={solution4} alt="Solution images" />
                                <div className="h5">Video & Animation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services_area pt-80 pb-100">
                <div className="container"> 
                    <div className="row services_row">
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
        </div>
    );
}

export default all_services;