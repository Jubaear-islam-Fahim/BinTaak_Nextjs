import React from 'react';

const Description = () => {
    return (
        <>
            <div className="field-area">
                <h3 className="title">Description</h3>

                <div className="col-lg-12">
                    <div className="form-group desc">
                        <textarea name="message" className="form-control" id="message" cols="30" rows="5" placeholder="Please tell us more about yourself.."></textarea>
                    </div>
                    <hr />
                    <button className='box-btn'>Update</button>
                </div>

            </div>
        </>
    );
};

export default Description;