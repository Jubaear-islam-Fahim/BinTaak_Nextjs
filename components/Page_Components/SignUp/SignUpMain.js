import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from 'next/link';


const SignUpMain = () => {

    const [state, setstate] = useState(false);
    const toggleBtn = () => {
        setstate(prevState => !prevState);
    }

    return (
        <div className="signup_page_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="signup_box">
                            <div className="signup_header">
                                <div className="mt-2 h3 fw-bold">Sign up</div>
                            </div>
                            <div className="signup_google_btn">
                                <button><FcGoogle /> Log in with Google</button>
                            </div>
                            <p className="text-center m-3 or_text">--- Or ---</p>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" name="name" className="form-control" id="floatingText" placeholder="Name" />
                                    <label htmlFor="floatingText">Full Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="Email" />
                                    <label htmlFor="floatingEmail">Email</label>
                                </div>

                                <div className="form-floating  mb-3">
                                    <input type={state ? "text" : "password"} name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                    <div className="pass_btn" onClick={toggleBtn}>
                                        {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </div>
                                </div>

                                <div className="form-floating">
                                    <input type={state ? "text" : "password"} name="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Retype password</label>
                                    <div className="pass_btn" onClick={toggleBtn}>
                                        {state ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                                    </div>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        I agree with <a href="">Terms</a> and <a href="">Privacy</a>
                                    </label>
                                </div>
                                <button type="submit" className="sub_btn">Sign Up</button>
                            </form>
                            <div className="signup_footer">
                                <div className="h6">Already have an account?</div>
                                <Link href="/sign-in"><a>Log In</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpMain;