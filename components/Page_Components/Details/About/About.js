import React, { useState } from 'react';
import data from '../../../../data/data.json';

const About = () => {

    const aboutTop = {
        titleTop: "Hello there! In this Gig, I am offering Squarespace Website Design for Businesses (both e-commerce and non-ecommerce), Blogs, Non-profit Organizations and Portfolio. I have designed 200+ Squarespace Websites with 100% positive ratings.",
        titleBottom: "If you are interested on my Gig, feel free to knock me to have a discussion on the project. Your Web Designer is always ready to reply."
    }
    const [about, setAbout] = useState(data.about)


    return (
        <>
            <div className="about-area">
                <h2 className='title'>About This Gig</h2>

                <div className="content">
                    <p className='title-top'>
                        {aboutTop.titleTop}
                    </p>

                    <h6 className='mb-4'>I provide :</h6>

                    <ul>
                        {

                            about.map(about =>
                                <>
                                    <li><i className="ri-checkbox-blank-circle-fill"></i> {about.item}</li>
                                </>
                            )
                        }
                    </ul>

                    <p className='title-top mb-4 mt-4'>{aboutTop.titleBottom}</p>
                    <p className='title-top mb-2'>Best Regards</p>
                    <span className='title-top'>Sharif</span>

                    
                </div>
            </div>
        </>
    );
};

export default About;