import styles from '../styles/habit.module.css';
import { useState } from 'react';

export default function HabitCheck({ habit }) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.habit}>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={toggleCheck} 
      />
      <p>{habit.name}</p>
    </div>
  );
}