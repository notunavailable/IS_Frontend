import styles from '../../styles/admin/adminComponents.module.css';
import { useState } from 'react';

const MappedButtons = ({ attributes, affectedAttributes, setAffectedAttributes, isActive, setIsActive }) => {

    const handleClick = (index) => {
        const updatedIsActive = [...isActive];
        updatedIsActive[index] = !updatedIsActive[index];
        setIsActive(updatedIsActive);

        const updatedAffectedAttributes = [...affectedAttributes];
        updatedAffectedAttributes[index] = {id: attributes[index]._id, affected:0}; // Assuming you want to set it to 0 when button is clicked
        setAffectedAttributes(updatedAffectedAttributes);
    };

    return attributes.map((attribute, i) => (
        <div className = {styles.container}>
            <button
                key={i}
                onClick={() => handleClick(i)}
                className={`${styles.button} ${isActive[i] ? styles.active : ''}`}
            >
                {attribute.name}
            </button>
            {isActive[i] && (
                <input
                    type="number"
                    min="0"
                    max="1"
                    value={affectedAttributes[i].affected}
                    step="0.01"
                    onChange={(e) => {
                        const updatedAffectedAttributes = [...affectedAttributes];
                        updatedAffectedAttributes[i].affected = e.target.value;
                        setAffectedAttributes(updatedAffectedAttributes);
                    }}
                />
            )}
        </div>
    ));
};

export default MappedButtons;