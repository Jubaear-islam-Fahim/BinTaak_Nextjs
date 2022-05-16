import Image from "next/image";

import logo from "../../public/assets/img/logo.png";

import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FcLink } from "react-icons/fc";
import { BsMessenger } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer_area pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_widget">
                            <Image src={logo} alt="footer logo" />
                            <p>We create Unique Experiences for <br /> Digital Businesses</p>
                            <ul className="widget_social d-flex gap-3">
                                <li><a><FaLinkedinIn /></a></li>
                                <li><a><FaTwitter /></a></li>
                                <li><a><FaFacebookF /></a></li>
                                <li><a><BsMessenger /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer_widget">
                            <div className="widget_title h5">Company</div>
                            <ul className="widget_list">
                                <li><a>About Us</a></li>
                                <li><a>Careers</a></li>
                                <li><a>Blog</a></li>
                                <li><a>Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer_widget">
                            <div className="widget_title h5">Resources</div>
                            <ul className="widget_list">
                                <li><a>Proposal Template</a></li>
                                <li><a>Invoice Template</a></li>
                                <li><a>Tuturoial</a></li>
                                <li><a>How to write a contract</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer_widget">
                            <div className="widget_title h5">Join Our Newsletter</div>
                            <form>
                                <input type="email" name="email" placeholder="Your email address" />
                                <button type="submit">Subscribe</button>
                            </form>
                            <div className="newsText">*  Will send you weekly updates for your better
                                finance management.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyRight">
                            <p>Copyright @ BinTaak 2022. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;