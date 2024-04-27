'use client';
import { useState } from 'react';
import { addUserSkill, postSkill, trackUserSkill } from '../../utils/api_functions';

const Form = ({ user }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [userSkills, setUserSkills] = useState(user ? user.skills : []);

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const description = formData.get('description') as string;

        if (name && description && user) {
            try {
                const skill = await postSkill({ name, description });
                const userSkills = await addUserSkill(user._id, skill._id, { name, description });
                setUserSkills(userSkills);
                setIsDialogOpen(false);
            } catch (error) {
                console.error('Failed to add skill:', error);
                // Optionally, inform the user of the failure
            }
        }
    };

    const toggleTracking = async (skillId, index) => {
        await trackUserSkill(user._id, skillId);
        const updatedSkills = [...userSkills];
        updatedSkills[index].tracking = !updatedSkills[index].tracking;
        setUserSkills(updatedSkills);
    };

    return (
        <div className="container">
            <dialog className="container" open={isDialogOpen}>
                <form onSubmit={onFormSubmit}>
                    <label>Name: </label>
                    <input type="text" name="name" required />
                    <label>Description: </label>
                    <input type="text" name="description" required />
                    <button type="submit">Submit</button>
                    <button onClick={() => setIsDialogOpen(false)}>Cancel</button>
                </form>
            </dialog>
            <h2>List of Skills:</h2>
            <div className="container">
                {userSkills.length > 0 && userSkills.map((skill, index) => {
                    if (typeof (skill.skillRef) == 'string') {
                        return;
                    }
                    return (
                        <div key={skill._id}>
                            <h3>{skill.skillRef.name} - <button onClick={() => toggleTracking(skill._id, index)}>
                                Tracking: {skill.tracking ? 'Yes' : 'No'}
                            </button></h3>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => setIsDialogOpen(true)}>Add Skill</button>
        </div>
    )
}

export default Form;
