import React, { useState } from 'react';
import styles from '../../styles/form.module.css';


const RegisterAttribute = () => {
    const [name, setName] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async () => {
        if (difficulty == "") {
            console.log("Please pick a rarity based difficulty")
        } else {
            await fetch('http://localhost:5001/api/v1/attribute/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    difficulty: difficulty,
                    description: description
                }),
            })
            setName("")
            setDifficulty("")
            setDescription("")
        }
    }

    return (
        <div className = {styles.container}>
            <div className={styles.containerItem}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className={styles.containerItem}>
                <label>Please select a rarity-based difficulty:</label>
                <select
                    value={difficulty}
                    onChange={(e) => {
                        setDifficulty(e.target.value);
                    }}
                    required
                >
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Epic">Epic</option>
                    <option value="Legendary">Legendary</option>
                </select>
            </div>
            <div className={styles.textBox}>
                <textarea
                    rows="5"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className={styles.containerItem}>
                <button type="submit" onClick={onSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default RegisterAttribute;
