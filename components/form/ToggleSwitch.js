import React from "react";
import styles from "../../styles/form.module.css";
  
const ToggleSwitch = ({ label, checked, setChecked }) => {

  return (
    <div className={styles.switchContainer}>
      <div className={styles.toggleSwitch}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          name={label} 
          id={label}
          defaultChecked={checked}
          onChange = {(e) => {setChecked(e.target.checked)}}
        />
        <label className={styles.label} htmlFor={label}>
          <span className={styles.inner} />
          <span className={styles.switch} />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;