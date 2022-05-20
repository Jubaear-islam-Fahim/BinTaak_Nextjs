import React, { useState } from 'react';
import NavBar from '../components/Global/NavBar';
import LoginMain from '../components/Page_Components/Login/LoginMain';



const SignInPage = () => {

    return (
        <div className="signup_wrapper">
            <NavBar />
            <LoginMain />
        </div>
    );
};

export default SignInPage;