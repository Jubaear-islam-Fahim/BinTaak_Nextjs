import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import data from '../../../../data/data.json';

const Faq = () => {
    const [faq, setFaq] = useState(data.faq)

    return (
        <>
            <div className="faq-area">
                <h2 className='title'>Fequently asked questions</h2>
                <Accordion defaultActiveKey="0">

                    {
                        faq.map(faq =>
                            <>
                                <Accordion.Item eventKey={faq.eventkey}>
                                    <Accordion.Header>{faq.title}</Accordion.Header>
                                    <Accordion.Body>
                                        {faq.desc}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </>)
                    }

                </Accordion>
            </div>
        </>
    );
};

export default Faq;