
import Image from "next/image";

import categories1 from "../../public/assets/img/c1.jpg"

const Categories = () => {
    return (
        <div className="categories_area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content">
                            <div className="h2 title">Most Popular Categories</div>
                        </div>
                    </div>
                </div>
                <div className="row categories_content mt-5">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="categories_item mt-3">
                            <div className="imageC">
                                <Image src={categories1} alt="categories images" />
                            </div>
                            <div className="textC">
                                <div className="h5">Title</div>
                                <p>Subtext</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="categories_item mt-3">
                            <div className="imageC">
                                <Image src={categories1} alt="categories images" />
                            </div>
                            <div className="textC">
                                <div className="h5">Title</div>
                                <p>Subtext</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="categories_item mt-3">
                            <div className="imageC">
                                <Image src={categories1} alt="categories images" />
                            </div>
                            <div className="textC">
                                <div className="h5">Title</div>
                                <p>Subtext</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="categories_item mt-3">
                            <div className="imageC">
                                <Image src={categories1} alt="categories images" />
                            </div>
                            <div className="textC">
                                <div className="h5">Title</div>
                                <p>Subtext</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;