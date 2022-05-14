import Image from "next/image";

import blog1 from "../../public/assets/img/b1.png";
import blog2 from "../../public/assets/img/b2.png";
import blog3 from "../../public/assets/img/bb1.png";
import blog4 from "../../public/assets/img/bb2.png";
import blog5 from "../../public/assets/img/bb3.png";
import blog6 from "../../public/assets/img/bb4.png";

const Blog = () => {
    return (
        <div className="blog_area pt-100 pb-100 bg_gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content about_sec">
                            <div className="h2 title">Our Latest Blog Posts</div>
                            <div className="mor_blog ms-auto">
                                <a>See all Blog post here</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="blog_item mt-4">
                            <div className="blog_head">
                                <div className="blog_img">
                                    <Image src={blog1} alt="blog images" />
                                </div>
                                <div className="blog_title h6">
                                    Believing neglected so so allowance existence departure.
                                </div>
                            </div>
                            <div className="blog_footer">
                                <ul className="date d-flex gap-4">
                                    <li>08-11-2021</li>
                                    <li>Category</li>
                                </ul>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="blog_item mt-4">
                            <div className="blog_head">
                                <div className="blog_img">
                                    <Image src={blog2} alt="blog images" />
                                </div>
                                <div className="blog_title h6">
                                    Believing neglected so so allowance existence departure.
                                </div>
                            </div>
                            <div className="blog_footer">
                                <ul className="date d-flex gap-4">
                                    <li>08-11-2021</li>
                                    <li>Category</li>
                                </ul>
                                <p className="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_side mt-4">
                            <div className="blog_side_item">
                                <div className="blog_img">
                                    <Image src={blog3} alt="blog images" />
                                </div>
                                <div className="blog_side_text">
                                    <ul className="date d-flex gap-4">
                                        <li>08-11-2021</li>
                                        <li>Category</li>
                                    </ul>
                                    <div className="blog_title h6">
                                        Partiality on or continuing in particular principles
                                    </div>
                                </div>
                            </div>
                            <div className="blog_side_item">
                                <div className="blog_img">
                                    <Image src={blog3} alt="blog images" />
                                </div>
                                <div className="blog_side_text">
                                    <ul className="date d-flex gap-4">
                                        <li>08-11-2021</li>
                                        <li>Category</li>
                                    </ul>
                                    <div className="blog_title h6">
                                        Partiality on or continuing in particular principles
                                    </div>
                                </div>
                            </div>
                            <div className="blog_side_item">
                                <div className="blog_img">
                                    <Image src={blog3} alt="blog images" />
                                </div>
                                <div className="blog_side_text">
                                    <ul className="date d-flex gap-4">
                                        <li>08-11-2021</li>
                                        <li>Category</li>
                                    </ul>
                                    <div className="blog_title h6">
                                        Partiality on or continuing in particular principles
                                    </div>
                                </div>
                            </div>
                            <div className="blog_side_item">
                                <div className="blog_img">
                                    <Image src={blog3} alt="blog images" />
                                </div>
                                <div className="blog_side_text">
                                    <ul className="date d-flex gap-4">
                                        <li>08-11-2021</li>
                                        <li>Category</li>
                                    </ul>
                                    <div className="blog_title h6">
                                        Partiality on or continuing in particular principles
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;