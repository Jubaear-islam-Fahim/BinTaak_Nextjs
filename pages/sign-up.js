import React, { useState } from 'react';
import NavBar from '../components/Global/NavBar';
import Link from 'next/link';

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignUp = () => {

    const [state, setstate] = useState(false);
    const toggleBtn = () => {
        setstate(prevState => !prevState);
    }

    return (
        <div className="signup_wrapper">
            <NavBar />
            <div className="signup_page_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="signup_box">
                                <div className="signup_header">
                                    <div className="mt-2 h3 fw-bold">Login</div>
                                </div>
                                <div className="signup_google_btn">
                                    <button><FcGoogle/> Log in with Google</button>
                                </div>
                                <p className="text-center m-3 or_text">--- Or ---</p>
                                <form> 
                                    <div className="form-floating mb-3">
                                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="Enter Your Email" />
                                        <label for="floatingEmail">Enter Your Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type={state ? "text" : "password"} name="password" className="form-control" id="floatingPassword" placeholder="Enter Your Password" />
                                        <label for="floatingPassword">Enter Your Password</label>
                                        <div className="pass_btn" onClick={toggleBtn}>
                                            {state ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                                        </div>
                                    </div> 
                                    <div className="forgot_pass">
                                        <a href="">Forgot Password?</a>
                                    </div>
                                    <button type="submit" className="sub_btn">Login</button>
                                </form>
                                <div className="signup_footer">
                                    <div className="h6">Already have an account?</div>
                                    <Link href="/sign-in">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    );
};

export default SignUp;