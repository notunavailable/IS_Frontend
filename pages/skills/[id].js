import Back from '../../components/management/Back'
import PracticingSwitch from '../../components/skill/PracticingSwitch'
import styles from '../../styles/skills.module.css'
import hexToRGBA from '../../utils/functions'
import { getSession } from 'next-auth/react'

const skillPage = ({ skill }) => {
    return (
        <div className={`${styles.card} ${styles.root}`} style={{ backgroundColor: hexToRGBA(skill.difficulty.color, 0.3) }}>
            <div className={styles.back}>
                <Back link="/Skills" />
            </div>
            <h1>{skill.name} - {skill.difficulty.name}</h1>
            <p>{skill.description}</p>
            <p>Created By: {skill.createdBy}</p>
            <p>Category: {skill.category}</p>
            <p>Attributes:</p>
            <ul className={styles.attributesList}>
                {skill.attributes.map((attr) => (
                    <li key={attr.id} className={styles.attributesListItem}>{attr.name}: {attr.affected}%</li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.params;


    const session = await getSession(context)
    if (!session) {
        return {
            redirect: {
                destination: '/Login',
                permanent: false,
            },
        }
    }
    const response = await fetch(`http://localhost:5001/api/v1/skill/${id}`);
    if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
    }

    let text = await response.text();
    let skill = null;

    if (text.length > 0) {
        skill = JSON.parse(text);
    }
    return {
        props: { skill: skill }
    };

}

export default skillPage;