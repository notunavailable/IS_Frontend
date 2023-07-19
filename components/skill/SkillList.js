import styles from '../../styles/skills.module.css'
import Link from 'next/link'
import PracticingSwitch from './PracticingSwitch'
import hexToRGBA from '../../utils/functions'

const SkillList = ({ skills, setPopup, userId }) => {
    const renderSkills = () => {
        if (Array.isArray(skills) && skills.length != 0) {
            return skills.map((skill) => {
                return (
                    <div key={skill.name} className={`${styles.card} ${styles.li}`} style = {{backgroundColor: hexToRGBA(skill.color, 0.3)}}>
                        <div>
                            <h3>{skill.name}</h3>
                            <h4>Level: {skill.level}</h4>
                            <h4>Experience: {skill.experience}</h4>
                            <PracticingSwitch practicing = {skill.practicing} skillId = {skill.id} userId = {userId}/>
                        </div>
                        <Link href={`/skills/${skill.id}`}>
                            <button>ἱ</button>
                        </Link>
                    </div>

                )
            })
        } else {
            return <h3>No Skills Added.</h3>
        }
    }

    return (
        <div className={styles.list}>
            {renderSkills()}
            <button onClick={() => { setPopup(true) }}>
                <h3>Add Skill + </h3>
            </button>
        </div>
    )
}

export default SkillList;