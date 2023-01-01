import React from 'react';

const Skill = () => {
    const skill = {
        skill: ['Html', 'Css', 'JS', 'Html', 'Css', 'JS', 'Html', 'Css', 'JS',],
    }
    return (
        <>
            <div className="skill-area">
                <h3>Skills</h3>
                <hr />
                
                <div className="skill">
                    {skill.skill.map((skill, index) =>
                        <p key={index}>
                            <span>{skill}</span>
                        </p>
                    )
                    }
                </div>

            </div>
        </>
    );
};

export default Skill;