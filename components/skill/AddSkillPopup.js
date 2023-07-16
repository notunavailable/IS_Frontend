import React, { useState } from 'react';
import styles from '../../styles/form.module.css'

const AddSkillPopup = ({ id }) => {
    const [description, setDescription] = useState("");
    const onSubmit = async () => {
        //POST form values
        const res = await fetch(`http://localhost:5001/api/v1/user/addSkill/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                description: description,
            }),
        });

        //Await for data for any desirable next steps
        const data = await res.json();
        console.log(data)
    }

    return (
        <form className={styles.container}>
            <h2>In great detail, please describe the skill you
                would like to add to your skill list.
            </h2>
            <div className={styles.textBox}>
                <textarea
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" onClick = {() => onSubmit()}>
                Submit
            </button>
        </form>
    )
}

export default AddSkillPopup;