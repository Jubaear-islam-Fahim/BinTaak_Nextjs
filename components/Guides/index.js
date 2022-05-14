import Image from "next/image";

import guides1 from "../../public/assets/img/g1.jpg";

const Guides = () => {
    return (
        <div className="guides_area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content">
                            <div className="h2 title">BinTaak Guides</div>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="guides_item">
                            <Image src={guides1} alt="guides" />
                            <div className="h4">Lorem Ispum Sit</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="guides_item">
                            <Image src={guides1} alt="guides" />
                            <div className="h4">Lorem Ispum Sit</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="guides_item">
                            <Image src={guides1} alt="guides" />
                            <div className="h4">Lorem Ispum Sit</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guides;