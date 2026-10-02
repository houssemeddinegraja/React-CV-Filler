import { useState } from 'react';

function PracticalExperienceSection() {
    const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', startDate: '', endDate: '' });
    const [isEditing, setIsEditing] = useState(true);

    return isEditing ? (
        <>
            <label>
                <strong>Company:</strong> <input type="text" name="company" value={experience.company} onChange={(e) => setExperience({ ...experience, company: e.target.value })} placeholder="Enter company name" />
            </label>
            <label>
                <strong>Position:</strong> <input type="text" name="position" value={experience.position} onChange={(e) => setExperience({ ...experience, position: e.target.value })} placeholder="Enter your position" />
            </label>
            <label>
                <strong>Responsibilities:</strong> <textarea name="responsibilities" value={experience.responsibilities} onChange={(e) => setExperience({ ...experience, responsibilities: e.target.value })} placeholder="Describe your responsibilities" />
            </label>
            <label>
                <strong>Work Period:</strong>
            </label>
            <label>
                Start Date:
                <input type="date" name="startDate" value={experience.startDate} onChange={(e) => setExperience({ ...experience, startDate: e.target.value })} />
            </label>
            <label>
                End Date:
                <input type="date" name="endDate" value={experience.endDate} onChange={(e) => setExperience({ ...experience, endDate: e.target.value })} />
            </label>
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>  
            <p><strong>Company:</strong> {experience.company || 'N/A'}</p>
            <p><strong>Position:</strong> {experience.position || 'N/A'}</p>
            <p><strong>Responsibilities:</strong> {experience.responsibilities || 'N/A'}</p>
            <p><strong>Work Period:</strong> {experience.startDate || 'N/A'} to {experience.endDate || 'N/A'}</p>
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
}

export default PracticalExperienceSection;
