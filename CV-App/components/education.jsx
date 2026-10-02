import { useState } from 'react';

function EducationSection() {
    const [education, setEducation] = useState({ school: '', degree: '', startDate: '', endDate: '' });
    const [isEditing, setIsEditing] = useState(true);

    return isEditing ? (
        <>
            <label>
                <strong>School:</strong> <input type="text" name="school" value={education.school} onChange={(e) => setEducation({ ...education, school: e.target.value })} placeholder="Enter school name" />
            </label>
            <label>
                <strong>Degree/Field:</strong> <input type="text" name="degree" value={education.degree} onChange={(e) => setEducation({ ...education, degree: e.target.value })} placeholder="Enter your degree" />
            </label>
            <label>
                <strong>Study Period:</strong>
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" value={education.startDate} onChange={(e) => setEducation({ ...education, startDate: e.target.value })} />
            </label>
            <label>
                End Date:
                <input type="date" name="endDate" value={education.endDate} onChange={(e) => setEducation({ ...education, endDate: e.target.value })} />
            </label>
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>
            <p><strong>School:</strong> {education.school || 'N/A'}</p>
            <p><strong>Degree/Field:</strong> {education.degree || 'N/A'}</p>
            <p><strong>Study Period:</strong> {education.startDate || 'N/A'} to {education.endDate || 'N/A'}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
}

export default EducationSection;
