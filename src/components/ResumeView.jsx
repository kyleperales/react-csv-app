import './../styles/styles.css'

function ResumeViewer({ resume, onEdit }) {
    return (
        <>
            <div class='container basic-info'>
                <h1>{resume.basicInfo.name}</h1>
                <div class='contact'>
                    <span>{resume.basicInfo.email}</span>
                    <span>{resume.basicInfo.phone}</span>
                </div>
            </div>
            
            <div class='container education'>
                <span class='school'>{resume.education.school}</span>
                <span>{resume.education.degree}</span>
                <span>{resume.education.graduationYear}</span>
            </div>

            <div class='container experience'>
                <span>{resume.experience.company}</span>
                <span>{resume.experience.position}</span>
                <div class='tenure'>
                    <span>{resume.experience.startDate}</span>
                    /
                    <span>{resume.experience.endDate}</span>
                </div>
            </div>

            <button onClick={onEdit}>Edit</button>
        </>
    )
}

export default ResumeViewer