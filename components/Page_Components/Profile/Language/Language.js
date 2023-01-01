import React from 'react';

const Language = () => {
    const lang = {
        lang: ['English', 'Bangla', 'Hindi'],
    }
    return (
        <div>
            <div className="lang-area">
                <h3>Description</h3>
                <hr />
                <ul>

                    {lang.lang.map((lang, index) =>
                        <li key={index}>
                            <span><i className="ri-checkbox-blank-circle-fill"></i> {lang}</span>
                        </li>
                    )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Language;