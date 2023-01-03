import React from 'react';

const Profile = () => {
    return (
        <>
           <div className="profile-area">
                <div className="profile">
                    <span className='badge'>Freelancer</span>
                    <div className="pro-img">
                        <img src="/assets/img/profile.png" alt="profile" />
                        <a href="#"><i className="ri-edit-box-line"></i></a>
                    </div>
                    <p>hazrat <i className="ri-checkbox-circle-line"></i></p>
                    <ul className='rate ms-2 d-flex align-items-center'>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li><i className="ri-star-fill"></i></li>
                        <li className='ratenumber'>5.0</li>
                        <li className='number'>(418)</li>
                    </ul>
                    <span>Coding is my Heart and Working with businesses is my addiction</span>

                    <p className='map'><i className="ri-map-pin-line"></i> USA</p>
                </div>
                <hr />
            </div>
        </>
    );
};

export default Profile;