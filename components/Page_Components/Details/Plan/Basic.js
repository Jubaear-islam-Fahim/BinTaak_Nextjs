import React from 'react';

const Basic = () => {

    const basic = {
        "id": 1,
        "package": "Basic",
        "price": 50,
        "desc": "Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse. Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse. Lorem ipsum dolor sit amet consectetur. Lorem cursus ornare turpis d`ellentesque a quam suspendisse.",
        "time": "3 days delivery",
        "items": [
            "Lorem ipsum dolor",
            "Lorem ipsum dolor",
            "Lorem ipsum dolor",
            "Lorem ipsum dolor"
        ]
    }

    return (
        <>
            <div className="package">
                <ul className="pack d-flex align-items-center justify-content-between">
                    <li><h3>{basic.package} Package</h3></li>
                    <li>${basic.price}</li>
                </ul>
                <p>{basic.desc}</p>
                <ul className="items">

                    {basic.items.map((item, index) =>

                        <li key={index}>
                            <i className="ri-check-line"></i> {item}
                        </li>
                    )
                    }
                </ul>

                <p className='time'> <i className="ri-time-line"></i> {basic.time}</p>
                <hr />

                <a href="#" className="box-btn">Continue</a>
            </div>
        </>
    );
};

export default Basic;