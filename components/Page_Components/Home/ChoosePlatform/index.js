import Image from "next/image";
import hireI from "/public/assets/img/hirei.png"

const ChoosePlatform = () => {
    return (
        <div className="choose_platform_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="choose_platform_content">
                            <div className="section-content">
                                <div className="h2 title">Choose Your Platform</div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
                            <div className="hire_form mt-5">
                                <Image src={hireI} alt="Icon"/>
                                <div className="h4">Hire  Freelancer</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                <div className="hire_btn mt-4">
                                    <a href="#" className="btn">Hire Freelancer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChoosePlatform;