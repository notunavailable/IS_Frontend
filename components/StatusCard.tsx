
import styles from './styles/status.module.css'
import { type UserSkill } from '../utils/interfaces'
import Link from 'next/link';

const StatusCard = ({ status }) => {

    function calculateAge(birthday: Date) {
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

    const renderSkills = status.skills.length > 0 ? status.skills.map((skill: UserSkill) => {
        if (typeof (skill.skillRef) == 'string') {
            return;
        }
        return (
            <div className={styles.left} key={skill.skillRef.name}>
                <h3>{skill.skillRef.name}: {skill.level}</h3>
            </div>
        )
    }) : <h3>No Skills Yet. Go to <Link href="/skills">Skills</Link> to add skills to your list.</h3>;

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

export default StatusCard;
