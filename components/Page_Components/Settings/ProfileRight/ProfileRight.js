import React from 'react';
import Description from './Description';
import Language from './Language';

const ProfileRight = () => {
    return (
        <>
            <div className="profile-right-area">
                <form action="#">
                    <div className="profile-pic">
                        <h2>sjalkf</h2>
                    </div>
                    <hr />
                    <Description />
                    <Language/>
                </form>
            </div>
        </>
    );
};

export default ProfileRight;