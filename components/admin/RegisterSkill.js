import { useState } from 'react'
import MappedButtons from './MappedButtons'
import styles from '../../styles/form.module.css'
import SKILL_REGISTER from '../../utils/api-defs'

const RegisterSkill = ({ attributes }) => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [description, setDescription] = useState("");
    const [affectedAttributes, setAffectedAttributes] = useState(Array(attributes.length).fill({ id: 0, affected: 0 }));
    const [isActive, setIsActive] = useState(Array(attributes.length).fill(false));


    const onSubmit = async () => {
        const filteredAttributes = affectedAttributes.filter((attribute) => attribute.affected > 0);
        let total = 0;
        filteredAttributes.map((attribute, i) => {total+=attribute.affected})
        if(total < 0){

        } else if (total > 0){

        } else if (difficulty == "") {
            console.log("Please pick a rarity based difficulty")
        } else {
            await fetch(SKILL_REGISTER(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    difficulty: difficulty,
                    affectedAttributes: filteredAttributes,
                    description: description
                }),
            })
            setName("")
            setDifficulty("")
            setDescription("")
            setAffectedAttributes(Array(attributes.length).fill({ id: 0, affected: 0 }));
            setIsActive(Array(attributes.length).fill(false))

        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerItem}>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className={styles.containerItem}>
                <label>Rarity-based difficulty:</label>
                <select value={difficulty} onChange={(e) => { setDifficulty(e.target.value) }}>
                    <option value="Common">Common</option>
                    <option value="Uncommon">Uncommon</option>
                    <option value="Rare">Rare</option>
                    <option value="Epic">Epic</option>
                    <option value="Legendary">Legendary</option>
                </select>
            </div>
            <label>Attributes:</label>
            <div className={styles.containerItem}>
                <div className={styles.containerMappedButtons}>
                    <MappedButtons
                        attributes={attributes}
                        setAffectedAttributes={setAffectedAttributes}
                        affectedAttributes={affectedAttributes}
                        isActive={isActive}
                        setIsActive={setIsActive}
                    />
                </div>
            </div>
            <div className={styles.textBox}>
                <label>Description:</label>
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
    )
}

export default RegisterSkill;