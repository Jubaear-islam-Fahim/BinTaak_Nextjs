import Image from "next/image";
import Slider from 'react-slick';

import bannerOne from "../public/assets/img/banner1.png";

const Banner = () => {
    const bannerSlid = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,

    }
    return (
        <>
            <section className="banner_area">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6 align-self-center">
                            <div className="banner_content">
                                <div className="h1 title">
                                    We create Unique Experiences for Digital Businesses
                                </div>
                                <form>
                                    <input type="text" name="search" placeholder="Search for your Service" />
                                    <button type="submit">Search</button>
                                </form>
                                <ul>
                                    <li><a>Website Design</a></li>
                                    <li><a>Wordpress</a></li>
                                    <li><a>Logo Design</a></li>
                                    <li><a>NFT art</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="banner_content">
                                <Slider {...bannerSlid}>
                                    <div className="banner_item">
                                        <Image src={bannerOne} alt="banner images" />
                                    </div>
                                    <div className="banner_item">
                                        <Image src={bannerOne} alt="banner images" />
                                    </div>
                                    <div className="banner_item">
                                        <Image src={bannerOne} alt="banner images" />
                                    </div>
                                </Slider>
                                {/* <div className="banner_item">
                  <Image src={bannerOne} alt="banner images" />
                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Banner;