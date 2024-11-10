import { useState } from 'react';

function ResumeEditor({ resume, onUpdate }) {
    const [basicInfo, setBasicInfo] = useState(resume.basicInfo);
    const [education, setEducation] = useState(resume.education);
    const [experience, setExperience] = useState(resume.experience);

    const onUpdateResume = () => {
        onUpdate({ basicInfo, education, experience });
    };

    const updateBasicInfo = (key, value) => {
        setBasicInfo({...basicInfo, [key]: value});
    }
    const updateEducation = (key, value) => {
        setEducation({...education, [key]: value});
    }
    const updateExperience = (key, value) => {
        setExperience({...experience, [key]: value});
    }

    return (
        <>
            <div class='container'>
                <input type="text" value={basicInfo.name}
                    onChange={(event) => updateBasicInfo('name', event.target.value)}/>
                <input type="text" value={basicInfo.email}                
                    onChange={(event) => updateBasicInfo('email', event.target.value)}/>
                <input type="text" value={basicInfo.phone}                
                    onChange={(event) => updateBasicInfo('phone', event.target.value)}/>
            </div>
            
            <div class='container'>
                <input type="text" value={education.school}                
                    onChange={(event) => updateEducation('school', event.target.value)}/>
                <input type="text" value={education.degree}                
                    onChange={(event) => updateEducation('degree', event.target.value)}/>
                <input type="text" value={education.graduationYear}                
                    onChange={(event) => updateEducation('graduationYear', event.target.value)}/>
            </div>

            <div class='container'>
                <input type="text" value={experience.company}                
                    onChange={(event) => updateExperience('company', event.target.value)}/>
                <input type="text" value={experience.position}                
                    onChange={(event) => updateExperience('position', event.target.value)}/>
                <input type="text" value={experience.startDate}                
                    onChange={(event) => updateExperience('startDate', event.target.value)}/>
                <input type="text" value={experience.endDate}                
                    onChange={(event) => updateExperience('endDate', event.target.value)}/>
            </div>
            <button onClick={onUpdateResume}>Update</button>
        </>
    )
}

export default ResumeEditor