import { useState } from 'react';
import ResumeEditor from './ResumeEditor';
import ResumeViewer from './ResumeView';

const defaultResume = {
    basicInfo: {
        name: 'John Doe',
        email: 'johnDoe@gmail.com',
        phone: '123-456-7890',
    },
    education: {
        school: 'University of Nowhere',
        degree: 'Bachelor of Science in Computer Science',
        graduationYear: '2020',
    },
    experience: {
        company: 'Company A',
        position: 'Software Engineer',
        startDate: '2020-01-01',
        endDate: '2021-01-01',
    }
}
function Resume() {
    const [isEdit, setIsEdit] = useState(false);
    const [resume, setResume] = useState(defaultResume);

    const handleEdit = () => {
        setIsEdit((isEdit) => !isEdit);
        console.log('isEdit: ', isEdit);
    }

    const handleUpdate = (updatedResume) => {
        setResume(updatedResume);
        handleEdit();
    }

    if (isEdit) {
       return <ResumeEditor resume={resume} onUpdate={handleUpdate}/>
    } else {
       return <ResumeViewer resume={resume} onEdit={handleEdit}/>
    }
}

export default Resume