import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="profile-area">
                <span className='badge'>Freelancer</span>
                <div className="profile">
                    <div className="pro-img">
                        <img src="/assets/img/profile.png" alt="profile" />
                    </div>
                    <p>hazrat</p>
                    <span>Coding is my Heart !</span>
                    <ul className='rate ms-2 d-flex align-items-center'>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li className='ratenumber'>5.0</li>
                        <li className='number'>(418)</li>
                    </ul>
                    <a href="#" className="box-btn">Contact Me</a>

                    <hr />

                    <ul className="profile-list">
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Profile;