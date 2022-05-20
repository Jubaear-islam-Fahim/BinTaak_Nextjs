import React, { useState } from 'react';
import NavBar from '../components/Global/NavBar';
import SignUpMain from '../components/Page_Components/SignUp/SignUpMain';




const SignUp = () => {


    return (
        <div className="signup_wrapper">
            <NavBar />
            <SignUpMain />
        </div>
    );
};

export default SignUp;