import React, { useState } from 'react';
import styles from '../../styles/admin/adminComponents.module.css';

const ButtonToggle = ({ isActiveButtons, setIsActiveButtons }) => {

  const toggleButtons = (index) => {
    const isActiveArray = [...isActiveButtons]; // Create a new array by spreading the existing array
    if (!isActiveArray[index]) {
      for (let i = 0; i < isActiveArray.length; i++) {
        if (i === index) {
          isActiveArray[i] = true;
        } else {
          isActiveArray[i] = false;
        }
      }
    } else {
      isActiveArray[index] = false;
    }
    setIsActiveButtons(isActiveArray);
  };

  const getButtonStyle = (i) => {
    return (`${styles.button} ${isActiveButtons[i] ? styles.active : ''}`)
  }

  return (
    <div>
      <button
        className={getButtonStyle(0)}
        onClick={() => { toggleButtons(0) }}
      >
        Register Skill
      </button>
      <button
        className={getButtonStyle(1)}
        onClick={() => { toggleButtons(1) }}
      >
        Register Attribute
      </button>
      <button
        className={getButtonStyle(2)}
        onClick={() => { toggleButtons(2) }}
      >
        Register Difficulty
      </button>
      <button
        className={getButtonStyle(3)}
        onClick={() => { toggleButtons(3) }}
      >
        Unregistered Skills
      </button>
    </div>
  );
};

export default ButtonToggle;
