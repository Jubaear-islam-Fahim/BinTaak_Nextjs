import Image from "next/image";

import solution1 from "/public/assets/img/solution1.png";
import solution2 from "/public/assets/img/solution2.png";
import solution3 from "/public/assets/img/solution3.png";
import solution4 from "/public/assets/img/solution4.png";

const Solution = () => {
    return (
        <div className="Solution_area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-content">
                            <div className="h2 title">Perfect Solution for your business</div> 
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution1} alt="Solution images"/>
                            <div className="h5">Graphics Design</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution2} alt="Solution images"/>
                            <div className="h5">Digital Marketing</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution3} alt="Solution images"/>
                            <div className="h5">Writing & Translation</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution4} alt="Solution images"/>
                            <div className="h5">Video & Animation</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution1} alt="Solution images"/>
                            <div className="h5">Graphics Design</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution2} alt="Solution images"/>
                            <div className="h5">Digital Marketing</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution3} alt="Solution images"/>
                            <div className="h5">Writing & Translation</div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="solution_item">
                            <Image src={solution4} alt="Solution images"/>
                            <div className="h5">Video & Animation</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solution;