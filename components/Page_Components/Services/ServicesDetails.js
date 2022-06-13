import Image from "next/image";
import serv from "/public/assets/img/s1.jpg";
import { Tab, Nav } from "react-bootstrap";
import { FaRegClock,FaIoxhost,FaCheck,FaRocketchat } from "react-icons/fa";

const ServicesDetails = () => {
    return (
        <div className="services-details-area mt-5 pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="services-details-content">
                            <div className="h2">Website Link Building And Generating Traffic</div>
                            <div className="h6 pt-3 primary-c">Category: Website Design</div>
                            <br />
                            <div className="services-details-img">
                                <Image src={serv} alt="services image" width={800} height={400} />
                            </div>
                            <br />
                            <div className="h5 fw-bold">About This Services</div>
                            <br />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <br /><br />
                            <div className="h3">Where does it come from?</div>
                            <br />
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                            <br /><br />
                            <div className="h3">Why do we use it?</div>
                            <br />
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                            <br /><br />
                            <div className="h3">Where can I get some?</div>
                            <br />
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                            <br /><br />
                            <div className="h3">Maecenas a molestie libero.</div>
                            <br />
                            <p>Curabitur tellus neque, fringilla vitae ante in, venenatis vehicula dolor. Aenean posuere porta mi, vel dictum magna tempor ac. In ultrices interdum sapien, at scelerisque turpis congue vitae. Nullam euismod neque non diam ultricies iaculis. Sed sit amet luctus risus. Etiam porttitor lacus eget odio bibendum, sed lobortis ante imperdiet. Ut scelerisque, leo quis finibus tincidunt, ante sem pharetra ante, sed porta magna purus ut nisi. Integer consequat sodales arcu. Integer eros est, fringilla sed luctus eget, volutpat eget lectus. Integer venenatis eleifend porta. Maecenas sit amet velit ut odio molestie cursus. Integer vehicula nulla neque, nec pellentesque mi dictum ac. Aenean elementum orci ac varius viverra.</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="services-price">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant="pills" className="services-nav">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Basic</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Standard</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Premium</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div className="service-plan">
                                            <ul className="plan-content">
                                                <li>
                                                    <div className="h4 title">
                                                        Basic
                                                    </div>
                                                    <div className="h4 plan-price ms-auto">
                                                        $10
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>I will do Basic Work</p>
                                                </li>
                                                <li>
                                                    <div className="h5 deliver">
                                                       <FaRegClock/> 2 days Delivery
                                                    </div>
                                                    <div className="h5 revisions ms-auto">
                                                       <FaIoxhost/> 5 Revisions
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="check"><FaCheck/> 1111</div>
                                                </li> 
                                            </ul>
                                            <div className="plan-btn">
                                                <a href="#">Continue ($1111)</a>
                                                <a href="#" className="chat-btn"><FaRocketchat/> Click to Chat</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                    <div className="service-plan">
                                            <ul className="plan-content">
                                                <li>
                                                    <div className="h4 title">
                                                        Standard
                                                    </div>
                                                    <div className="h4 plan-price ms-auto">
                                                        $50
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>I will do Standard Work</p>
                                                </li>
                                                <li>
                                                    <div className="h5 deliver">
                                                       <FaRegClock/> 2 days Delivery
                                                    </div>
                                                    <div className="h5 revisions ms-auto">
                                                       <FaIoxhost/> 5 Revisions
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="check"><FaCheck/> 1111</div>
                                                </li> 
                                            </ul>
                                            <div className="plan-btn">
                                                <a href="#">Continue ($1111)</a>
                                                <a href="#" className="chat-btn"><FaRocketchat/> Click to Chat</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                    <div className="service-plan">
                                            <ul className="plan-content">
                                                <li>
                                                    <div className="h4 title">
                                                        Premium
                                                    </div>
                                                    <div className="h4 plan-price ms-auto">
                                                        $100
                                                    </div>
                                                </li>
                                                <li>
                                                    <p>I will do Premium Work</p>
                                                </li>
                                                <li>
                                                    <div className="h5 deliver">
                                                       <FaRegClock/> 2 days Delivery
                                                    </div>
                                                    <div className="h5 revisions ms-auto">
                                                       <FaIoxhost/> 5 Revisions
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="check"><FaCheck/> 1111</div>
                                                </li> 
                                            </ul>
                                            <div className="plan-btn">
                                                <a href="#">Continue ($1111)</a>
                                                <a href="#" className="chat-btn"><FaRocketchat/> Click to Chat</a>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesDetails;