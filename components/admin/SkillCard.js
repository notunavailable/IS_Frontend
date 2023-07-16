import styles from '../../styles/skills.module.css'

const SkillCard = ({ skill }) => {

    const renderAA = skill.attributes.map((attribute, i) => {
        return (
            <h4 key={i}>{attribute.name}: {attribute.affected}%</h4>
        )
    })

    return (
        <div className={styles.card}>
            <div className={styles.topCard}>
                <h2>{skill.name} - {skill.difficulty}</h2>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.aCard}>
                    <h2>Category: {skill.category}</h2>
                </div>
                <div className={styles.aCard}>
                    {renderAA}
                </div>
            </div>
            <body className={styles.textContainer}>
                <br />{skill.description}<br /><br />
                {skill.attributeExplanation}<br /><br />
                {skill.difficultyExplanation}<br /><br />
            </body>
            <div className={styles.aCard}>
                <h3>Approved: {skill.approved ? 'Yes' : 'No'}</h3>
            </div>
        </div>
    )
}

export default SkillCard;