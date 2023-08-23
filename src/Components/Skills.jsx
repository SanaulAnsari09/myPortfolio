import React from 'react';
import './Skills.css';
import Card from './SkillsCard/Card';
import skillsData from './SkillsCard/Data';

const Skills =()=>{
    return (
        <>
        <div className="container">
        <div className="subContainer">
            <div className="mainDiv1">
                <h1> My Skills.</h1>
                <div className="skillsDiv">
                    <Card
                        id={skillsData[0].id}
                        skill={skillsData[0].skill}
                        desc={skillsData[0].descripiton}
                    />
                    <Card
                         id={skillsData[1].id}
                         skill={skillsData[1].skill}
                         desc={skillsData[1].descripiton}
                    />
                    <Card
                         id={skillsData[2].id}
                         skill={skillsData[2].skill}
                         desc={skillsData[2].descripiton}
                    />
                    <Card
                         id={skillsData[3].id}
                         skill={skillsData[3].skill}
                         desc={skillsData[3].descripiton}
                    />
                    <Card
                         id={skillsData[4].id}
                         skill={skillsData[4].skill}
                         desc={skillsData[4].descripiton}
                    />
                    <Card
                         id={skillsData[5].id}
                         skill={skillsData[5].skill}
                         desc={skillsData[5].descripiton}
                    />
                    <Card
                         id={skillsData[6].id}
                         skill={skillsData[6].skill}
                         desc={skillsData[6].descripiton}
                    />
                    <Card
                         id={skillsData[7].id}
                         skill={skillsData[7].skill}
                         desc={skillsData[7].descripiton}
                    />
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default Skills;