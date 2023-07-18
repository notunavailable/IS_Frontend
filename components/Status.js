import React from 'react';
import styles from '../styles/status.module.css'

const Status = ({ status }) => {

    function calculateAge(birthday) {
        let currentDate = new Date();
        let birthDate = new Date(birthday);
        // get difference in years.
        let age = currentDate.getFullYear() - birthDate.getFullYear();

        // The current year is the year of the next birthday.
        if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
    const renderSkills = status.skills.map((skill, i) => {
        return (
            <div className={styles.left} key = {skill.name}>
                <h3>{skill.name}: {skill.level}</h3>
            </div>
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.left}>
                    <h3>Name: {status.firstName} {status.lastName}</h3>
                </div>
                <div className={styles.right}>
                    <h3>Age: {calculateAge(status.birthday)} years</h3>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.left}>
                    <h3>Level: {status.level}</h3>
                </div>
                <div className={styles.right}>
                    <h3>EXP: {status.experience}</h3>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.left}>
                    <h3>Race: {status.race}</h3>
                </div>
                <div className={styles.left}>
                    <h3>Username: {status.username}</h3>
                </div>
            </div>
            <div className={styles.left}>
                <h3>Skills:</h3>
            </div>
            {renderSkills}
        </div>
    );
}

export default Status;